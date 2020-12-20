import * as React from 'react'

export const testGridContext = (spacing: string | number, child: React.ReactNode) => {
  if (spacing === null || spacing === undefined) {
    if (process.env.NODE_ENV !== 'production') {
      return (
        <div>Missing <span style={{color: 'white', backgroundColor: 'red'}}>GridContext</span>
          This component is rendered outside of Grid</div>
      )
    }
    return <div className="grid-context-missing"/>
  }
  return child
}
