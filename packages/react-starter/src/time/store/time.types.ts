import {Clear, FetchTime, FetchTimeError, FetchTimeSuccess, FetchTimes} from './time.actions'

export type TimeAction =
  FetchTime
  | FetchTimes
  | FetchTimeSuccess
  | FetchTimeError
  | Clear

export enum TimeActionKeys {
  FETCH_TIME = 'time/FETCH_TIME',
  FETCH_TIMES = 'time/FETCH_TIMES',
  FETCH_TIME_SUCCESS = 'time/FETCH_TIME_SUCCESS',
  FETCH_TIME_ERROR = 'time/FETCH_TIME_ERROR',
  CLEAR = 'time/CLEAR',
}

export type TimeState = {
  results: Result[],
  error: any,
  isLoading: boolean,
}

export type Coordinates = {
  readonly lon: number,
  readonly lat: number,
}

export type Result = {
  readonly time: string,
  readonly countryName: string,
  readonly timezoneId: string,
}
