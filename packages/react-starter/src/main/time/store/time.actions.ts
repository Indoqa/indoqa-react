import {Action} from 'redux'

import {Result, Coordinates, TimeActionKeys} from './time.types'

export interface FetchTime extends Action {
  type: TimeActionKeys.FETCH_TIME,
  coordinates: Coordinates,
}

export const fetchTime = (coordinates: Coordinates): FetchTime => ({
  type: TimeActionKeys.FETCH_TIME,
  coordinates,
})

// ----------------------------------------------------------------------------

export interface FetchTimes extends Action {
  type: TimeActionKeys.FETCH_TIMES,
  coordinates: Coordinates[],
}

export const fetchTimes = (coordinates: Coordinates[]): FetchTimes => ({
  type: TimeActionKeys.FETCH_TIMES,
  coordinates,
})

// ----------------------------------------------------------------------------

export interface FetchTimeSuccess extends Action {
  type: TimeActionKeys.FETCH_TIME_SUCCESS,
  results: Result[],
}

export const fetchTimeSuccess = (results: Result[]): FetchTimeSuccess => ({
  type: TimeActionKeys.FETCH_TIME_SUCCESS,
  results,
})

// ----------------------------------------------------------------------------

export interface FetchTimeError extends Action {
  type: TimeActionKeys.FETCH_TIME_ERROR,
  error: string,
}

export const fetchTimeError = (error: string): FetchTimeError => ({
  type: TimeActionKeys.FETCH_TIME_ERROR,
  error,
})

// ----------------------------------------------------------------------------

export interface Clear extends Action {
  type: TimeActionKeys.CLEAR,
}

export const clear = (): Clear => ({
  type: TimeActionKeys.CLEAR,
})
