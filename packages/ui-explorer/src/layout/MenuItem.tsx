import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {NavLink} from 'react-router-dom'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'

interface MenuLinkProps extends WithUIETheme {
  to: string
}

const MenuItem: React.FC<React.PropsWithChildren<MenuLinkProps>> = ({uieTheme, to, children}) => {
  const style: IStyle = {
    paddingBottom: '0.2rem',
    marginLeft: 0,
    paddingLeft: 0,
    listStyle: 'none',
    '> a': {
      textDecoration: 'none',
      ...uieTheme.fontStyles.base,
      color: uieTheme.colors.textMenuItem,
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
      <NavLink to={to} data-testid={to}>
        {children}
      </NavLink>
    </FelaComponent>
  )
}

export default withUIETheme(MenuItem)
