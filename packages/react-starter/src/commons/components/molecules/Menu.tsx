import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

const Menu: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}) => ({
    width: theme.layout.menuWidth,
    height: '100%',
    backgroundColor: theme.colors.primaryLight,
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

export default Menu
