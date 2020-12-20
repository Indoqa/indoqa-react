import * as React from 'react'
import {UIETheme} from './UIETheme'
import {uieLightTheme} from './uieThemes'

export const UIEThemeContext = React.createContext<UIETheme>(uieLightTheme)
