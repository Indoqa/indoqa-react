import {Action} from 'redux'
import {WordsActionKeys} from './words.types'

export interface FetchWords extends Action {
  type: WordsActionKeys.FETCH,
  prefix: string,
}

export const fetchWords = (prefix: string): FetchWords => ({
  type: WordsActionKeys.FETCH,
  prefix,
})

// ----------------------------------------------------------------------------

export interface FetchWordsSuccess extends Action {
  type: WordsActionKeys.FETCH_SUCCESS,
  results: string[]
}

export const fetchWordsSuccess = (results: string[]): FetchWordsSuccess => ({
  type: WordsActionKeys.FETCH_SUCCESS,
  results,
})

// ----------------------------------------------------------------------------

export interface FetchWordsError extends Action {
  type: WordsActionKeys.FETCH_ERROR,
  error: string,
}

export const fetchWordsError = (error: string): FetchWordsError => ({
  type: WordsActionKeys.FETCH_ERROR,
  error,
})

// ----------------------------------------------------------------------------

export interface FetchWordsCancel extends Action {
  type: WordsActionKeys.FETCH_CANCEL,
}

export const cancelFetchWords = (error: string): FetchWordsCancel => ({
  type: WordsActionKeys.FETCH_CANCEL,
})
