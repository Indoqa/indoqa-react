import * as React from 'react'
import {UIETheme} from './UIETheme'
import {lightTheme} from './uieThemes'

export default React.createContext<UIETheme>(lightTheme)
