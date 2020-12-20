import * as React from 'react'
import {Spacing} from '../types'

type Context = {
  spacing: Spacing,
}

export const GridContext = React.createContext<Context>({
  spacing: 0,
})
