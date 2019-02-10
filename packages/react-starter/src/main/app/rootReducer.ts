import {combineReducers} from 'redux'

import timeReducer from '../time/store/time.reducer'
import wordsReducer from '../words/store/words.reducer'
import formsReducer from '../forms/store/forms.reducer'

const rootReducer: any = combineReducers({
  time: timeReducer,
  words: wordsReducer,
  forms: formsReducer,
})

export default rootReducer
