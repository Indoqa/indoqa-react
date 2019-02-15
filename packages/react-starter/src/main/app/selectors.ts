import {RootState} from './types'

export const selectTimeState = (state: RootState) => state.time
export const selectWordsState = (state: RootState) => state.words
export const selectFormsState = (state: RootState) => state.forms
