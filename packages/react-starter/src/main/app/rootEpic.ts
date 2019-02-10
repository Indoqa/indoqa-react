import {ActionsObservable, combineEpics, ofType} from 'redux-observable'
import {ajax} from 'rxjs/ajax'
import {takeUntil} from 'rxjs/operators'
import * as Types from 'Types'
import history from './history'

import time from '../time/store/time.epics'
import words from '../words/store/words.epics'
import forms from '../forms/store/forms.epics'

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

const rootEpic = (action$: ActionsObservable<Types.RootAction>, state$: Types.RootState) => {
  return combinedEpics(action$, state$, services).pipe(
    takeUntil(action$.pipe(
      ofType('END'),
    )),
  )
}

export default rootEpic
