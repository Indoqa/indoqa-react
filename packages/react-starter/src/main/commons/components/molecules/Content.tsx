import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'
import {CSSPropertiesWithBreakpointExtensions} from '../../../app/types'

const Content: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}): CSSPropertiesWithBreakpointExtensions => ({
    padding: theme.spacing.space2,
    width: '100%',
    desktop: {
      marginLeft: theme.layout.menuWidth,
    },
    tablet: {
      marginLeft: theme.layout.menuWidth,
    },
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

export default Content
