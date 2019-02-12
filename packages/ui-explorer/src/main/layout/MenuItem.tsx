import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {NavLink} from 'react-router-dom'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'

interface MenuLinkProps extends WithUIETheme {
  to: string,
}

interface MenuLinkStyle extends IStyle {
  '> a': IStyle,
  '> a:visited': IStyle,
  '> a.active': IStyle,
}

const MenuItem: React.FC<MenuLinkProps> = ({uieTheme, to, children}) => {
  const style: MenuLinkStyle = {
    paddingBottom: '0.15rem',
    marginLeft: 0,
    paddingLeft: 0,
    listStyle: 'none',
    '> a': {
      textDecoration: 'none',
      ...uieTheme.fontStyles.base,
      color: uieTheme.colors.text,
      fontSize: uieTheme.fontSizes.text,
    },
    '> a:visited': {
      textDecoration: 'none',
      ...uieTheme.fontStyles.base,
    },
    '> a.active': {
      fontWeight: 'bold',
    },
  }
  return (
    <FelaComponent style={style} as="li">
      <NavLink to={to}>{children}</NavLink>
    </FelaComponent>
  )
}

export default withUIETheme(MenuItem)