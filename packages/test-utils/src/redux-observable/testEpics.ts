import {Action} from 'redux'
import {ActionsObservable, StateObservable} from 'redux-observable'
import * as Rx from 'rxjs'
import {AjaxResponse} from 'rxjs/ajax'
import {AjaxCreationMethod} from 'rxjs/internal/observable/dom/AjaxObservable'
import {TestScheduler} from 'rxjs/testing'
import * as TypeMoq from 'typemoq'

// see https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/testing/marble-testing.md
// see https://www.nexthink.com/blog/marble-testing-redux-observable-epics/
// see https://github.com/florinn/typemoq#create-mocks

export const createTestScheduler = () => {
  return new TestScheduler((actual, expected) => {
    // console.log('actual', actual)
    // console.log('expected', expected)
    return expect(actual).toEqual(expected)
    // return expect(actual[0].notification.value[0].notification.value).toEqual(expected[0].notification.value)
  })
}

export function createTestAction$FromMarbles<A extends Action>(testScheduler: TestScheduler, marbles: string, values?: any) {
  return new ActionsObservable<A>(testScheduler.createHotObservable(marbles, values))
}

export type CreateEpic<A extends Action> = (action: ActionsObservable<A>, scheduler: Rx.SchedulerLike) => Rx.Observable<any>

export function testEpic(
  createEpic: CreateEpic<any>, inputActions: any, outputActions: any, inputMarble: string, outputMarble: string) {
  // Create test scheduler
  const testScheduler = createTestScheduler()

  // Run the tests in a virtualized environment
  testScheduler.run(({expectObservable}) => {
    // Assert on the resulting actions observable
    const action$ = createTestAction$FromMarbles<Action>(testScheduler, inputMarble, inputActions)

    // Apply epic on actions observable
    const outputAction$ = createEpic(action$, testScheduler)

    // Assert on the resulting actions observable
    expectObservable(outputAction$).toBe(outputMarble, outputActions)
  })
}

export function testSimpleEpic<I extends Action, O>(createEpic: CreateEpic<any>, inputAction: I, outputAction: O) {
  const inputActions = {
    a: inputAction,
  }
  const outputActions = {
    a: outputAction,
  }
  testEpic(createEpic, inputActions, outputActions, '-a', '-a')
}

export function mockAjax$(result: any, error?: boolean) {
  const ajaxResponseMock = TypeMoq.Mock.ofType<AjaxResponse>()
  ajaxResponseMock.setup((mock) => mock.response).returns(() => result)
  const ajaxMock = TypeMoq.Mock.ofType<AjaxCreationMethod>()
  ajaxMock
    .setup((mock) => mock.post(TypeMoq.It.isAny(), TypeMoq.It.isAny(), TypeMoq.It.isAny()))
    .returns(() => (error) ? Rx.throwError(result) : Rx.of(ajaxResponseMock.target))
  return ajaxMock.target
}

export function mockState<S = {}>(initialState: S = {} as S) {
  return new StateObservable<S>(new Rx.Subject<S>(), initialState)
}
