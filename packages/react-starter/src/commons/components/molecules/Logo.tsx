import {PStyle} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

interface LogoStyleProps extends PStyle {
  '> a': IStyle,
}

interface Props {
  logoHeight: number,
}

const Logo: React.FC<Props> = ({children}) => {
  const style: StyleFunction<Theme, Props> = ({theme, logoHeight}): LogoStyleProps => ({
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    marginRight: theme.spacing.space2,
    height: logoHeight,
    fontWeight: 'bold',
    '> a': {
      textDecoration: 'none',
      color: theme.colors.text,
    },
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

export default Logo
