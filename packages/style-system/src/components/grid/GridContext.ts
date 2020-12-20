import * as React from 'react'

type Context = {
  spacing: string | number,
}

export const GridContext = React.createContext<Context>({
  spacing: 0,
})
