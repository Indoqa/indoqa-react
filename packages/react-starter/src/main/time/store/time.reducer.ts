import produce from 'immer'
import {TimeAction, TimeActionKeys, TimeState} from './time.types'

const initialTime: TimeState = {
  results: [],
  error: null,
  isLoading: false,
}

const timeReducer = (state: TimeState = initialTime, action: TimeAction) => {
  return produce(state, (draft: TimeState) => {
    switch (action.type) {
      case TimeActionKeys.FETCH_TIME:
      case TimeActionKeys.FETCH_TIMES:
        draft.isLoading = true
        return
      case TimeActionKeys.FETCH_TIME_SUCCESS: {
        draft.isLoading = false
        draft.results = action.results
        draft.error = null
        return
      }
      case TimeActionKeys.FETCH_TIME_ERROR: {
        draft.isLoading = false
        draft.results = []
        draft.error = action.error
        return
      }
      case TimeActionKeys.CLEAR: {
        return initialTime
      }
    }
  })
}

export default timeReducer
