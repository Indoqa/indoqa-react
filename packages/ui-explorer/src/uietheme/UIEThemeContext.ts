import * as React from 'react'
import {UIETheme} from './UIETheme'
import {uieLightTheme} from './uieThemes'

export default React.createContext<UIETheme>(uieLightTheme)
