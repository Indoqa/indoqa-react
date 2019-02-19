import {IStyle} from 'fela'
import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

interface StyleProps extends IStyle {
  '> .active': CSSProperties,
}

const MenuLink: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}): StyleProps => ({
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderBottom: '1px solid #f5f5f5',
    padding: theme.spacing.space1,
    margin: theme.spacing.space1,
    '> .active': {
      color: theme.colors.text,
      fontWeight: 'bold',
      cursor: 'auto',
      textDecoration: 'none',
    },
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

export default MenuLink
