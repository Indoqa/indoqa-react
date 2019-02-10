import {FetchWords, FetchWordsCancel, FetchWordsError, FetchWordsSuccess} from './words.actions'

export type WordsAction =
  FetchWords
  | FetchWordsSuccess
  | FetchWordsError
  | FetchWordsCancel

export enum WordsActionKeys {
  FETCH = 'words/FETCH',
  FETCH_SUCCESS = 'words/FETCH_SUCCESS',
  FETCH_ERROR = 'words/FETCH_ERROR',
  FETCH_CANCEL = 'words/FETCH_CANCEL',
}

export type WordsState = {
  readonly prefix: string,
  readonly isLoading: boolean,
  readonly results: string[],
  readonly error: string,
}
