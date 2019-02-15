import {WordsAction, WordsActionKeys, WordsState} from './words.types'

const initialState: WordsState = {
  results: [],
  prefix: '',
  isLoading: false,
  error: '',
}

export default (state: WordsState = initialState, action: WordsAction) => {
  switch (action.type) {
    case WordsActionKeys.FETCH:
      return {
        ...state,
        prefix: action.prefix,
        isLoading: true,
      }

    case WordsActionKeys.FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        results: action.results,
      }

    case WordsActionKeys.FETCH_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        results: [],
      }

    case WordsActionKeys.FETCH_CANCEL:
      return {
        ...state,
        isLoading: false,
        results: [],
      }
    default:
      return state
  }
}
