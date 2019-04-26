import {Epic, ofType} from 'redux-observable'
import {forkJoin, of} from 'rxjs'
import {catchError, map, mergeMap, retry, switchMap, timeout} from 'rxjs/operators'

import {RootAction, RootState, Services} from '../../app/types'
import {FetchTime, fetchTimeError, FetchTimes, fetchTimeSuccess} from './time.actions'
import {geonamesService$} from './time.service'
import {TimeAction, TimeActionKeys} from './time.types'

interface TimeEpic extends Epic<RootAction, TimeAction, RootState, Services> {
}

/*
 * Learn more about piping observables:
 * https://blog.hackages.io/rxjs-5-5-piping-all-the-things-9d469d1b3f44
 */
const fetchTimeEpic$: TimeEpic = (action$, state, {ajax}) =>
  action$.pipe(
    ofType<FetchTime>(TimeActionKeys.FETCH_TIME),
    switchMap((action) => {
      const {lon, lat} = action.coordinates
      return geonamesService$(ajax, lon, lat).pipe(
        retry(3),
        timeout(5000),
        map((result) => fetchTimeSuccess([result])),
        catchError((error) => of(fetchTimeError(error.message))),
      )
    }),
  )

const fetchTimesEpic$: TimeEpic = (action$, state, {ajax}) =>
  action$.pipe(
    ofType<FetchTimes>(TimeActionKeys.FETCH_TIMES),
    // produce multiple observables
    map((action) => {
      return action.coordinates.map((coordinates) => {
        const {lon, lat} = coordinates
        return geonamesService$(ajax, lon, lat).pipe(
          retry(3),
          timeout(5000),
        )
      })
    }),
    // execute multiple requests
    mergeMap((requests) => {
      return forkJoin(requests).pipe(
        map((results) => fetchTimeSuccess(results)),
        catchError((error) => of(fetchTimeError(error.message))),
      )
    }),
  )

export default [fetchTimeEpic$, fetchTimesEpic$]
