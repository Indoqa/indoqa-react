import {PStyle} from '@indoqa/style-system'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

const Content: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}): PStyle => ({
    padding: theme.spacing.space2,
    width: '100%',
    desktop: {
      marginLeft: theme.layout.menuWidth,
    },
    tablet: {
      marginLeft: theme.layout.menuWidth,
    },
    print: {
      marginLeft: 0,
    },
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

export default Content
