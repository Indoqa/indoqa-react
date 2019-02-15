import {ActionsObservable, combineEpics, ofType} from 'redux-observable'
import {ajax} from 'rxjs/ajax'
import {takeUntil} from 'rxjs/operators'
import history from './history'

import time from '../time/store/time.epics'
import words from '../words/store/words.epics'
import forms from '../forms/store/forms.epics'
import {RootAction, RootState} from './types'

export const services = {
  ajax,
  scheduler: undefined,
  history,
}

const combinedEpics = combineEpics(
  ...forms,
  ...time,
  ...words,
)

const rootEpic = (action$: ActionsObservable<RootAction>, state$: RootState) => {
  return combinedEpics(action$, state$, services).pipe(
    takeUntil(action$.pipe(
      ofType('END'),
    )),
  )
}

export default rootEpic
