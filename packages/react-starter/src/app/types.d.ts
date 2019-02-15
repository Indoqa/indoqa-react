import * as React from 'react'
import {CSSProperties} from 'react'
import {StateType} from 'typesafe-actions'
import {FormsAction} from '../forms/store/forms.types'
import {TimeAction} from '../time/store/time.types'
import {WordsAction} from '../words/store/words.types'
import {services} from './rootEpic'
import rootReducer from './rootReducer'
import {Theme} from './theme'

export type RootState = StateType<typeof rootReducer>
export type RootAction = FormsAction
  | TimeAction
  | WordsAction
export type Services = typeof services

export interface CSSPropertiesWithBreakpointExtensions extends CSSProperties {
  desktop: CSSProperties,
  tablet: CSSProperties,
}
export interface WithTheme {
  readonly theme: Theme,
}
export interface WithChildren {
  readonly children?: React.ReactNode,
}
export interface FelaProps extends WithTheme, WithChildren {}
