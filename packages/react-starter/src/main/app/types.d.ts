import {StateType} from 'typesafe-actions'
import {FormsAction} from '../forms/store/forms.types'
import {TimeAction} from '../time/store/time.types'
import {WordsAction} from '../words/store/words.types'
import {services} from './rootEpic'
import rootReducer from './rootReducer'

export type RootState = StateType<typeof rootReducer>
export type RootAction = FormsAction
  | TimeAction
  | WordsAction
export type Services = typeof services
