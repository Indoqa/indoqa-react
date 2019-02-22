import {Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {Link} from 'react-router-dom'
import Heading from '../layout/Heading'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'

interface Props extends WithUIETheme {
  to: string,
}

interface MenuLinkStyle extends IStyle {
  '> a': IStyle,
  'tablet': IStyle,
}

const Logo: React.FC<Props> = ({uieTheme, to, children}) => {
  if (typeof children !== 'string') {
    return (
      <Flex fullWidth justifyContent="center">
        <Link to={to}>
          {children}
        </Link>
      </Flex>
    )
  }

  const style: MenuLinkStyle = {
    listStyle: 'none',
    paddingLeft: uieTheme.spacing.space4,
    '> a': {
      textDecoration: 'none',
    },
    tablet: {
      paddingLeft: uieTheme.spacing.space3,
    },
  }
  return (
    <FelaComponent style={style}>
      <Link to={to}>
        <Heading as="h1">
          {children}
        </Heading>
      </Link>
    </FelaComponent>
  )
}

export default withUIETheme(Logo)
