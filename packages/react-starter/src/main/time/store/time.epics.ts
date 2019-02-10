import {forkJoin} from 'rxjs/internal/observable/forkJoin'
import {of} from 'rxjs/internal/observable/of'
import {switchMap, map, catchError, retry, mergeMap, timeout} from 'rxjs/operators'
import {Epic, ofType} from 'redux-observable'

import Types from 'Types'
import {FetchTime, fetchTimeError, fetchTimeSuccess, FetchTimes} from './time.actions'
import {geonamesService$} from './time.service'
import {TimeAction, TimeActionKeys} from './time.types'

interface TimeEpic extends Epic<Types.RootAction, TimeAction, Types.RootState, Types.Services> {}

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
