import {Epic, ofType} from 'redux-observable'
import {of} from 'rxjs/internal/observable/of'
import {catchError, debounceTime, delay, map, switchMap, takeUntil} from 'rxjs/operators'

import {RootAction, RootState, Services} from '../../app/types'
import {FetchWords, fetchWordsError, fetchWordsSuccess} from './words.actions'
import {wordsService$} from './words.service'
import {WordsAction, WordsActionKeys} from './words.types'

interface TimeEpic extends Epic<RootAction, WordsAction, RootState, Services> {}

const fetchWordsEpic$: TimeEpic = (action$, state, {ajax, scheduler}) =>
  action$.pipe(
    ofType<FetchWords>(WordsActionKeys.FETCH),
    // the scheduler is only needed for the test environment,
    // in the browser environment the scheduler is undefined and RxJS uses the default scheduler
    debounceTime(500, scheduler),
    switchMap((action) => {
      if (action.prefix === '') {
        return of(fetchWordsSuccess([]))
      }
      return wordsService$(ajax, action.prefix).pipe(
        // artificially delay the execution of the ajax request for demo purpose
        delay(1500, scheduler),
        // stop this observable stream until the cancel action is triggered
        takeUntil(action$.ofType(WordsActionKeys.FETCH_CANCEL)),
        map((words) => fetchWordsSuccess(words.searchResults.map((searchResult) => searchResult.word))),
        catchError((e) => of(fetchWordsError(e.message))))
    }),
  )

export default [fetchWordsEpic$]
