import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

const Bar: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing.space2,
    paddingRight: theme.spacing.space2,
    height: theme.layout.actionBarHeight,
    backgroundColor: theme.colors.primaryLight,
    width: 'auto',
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

export default Bar
