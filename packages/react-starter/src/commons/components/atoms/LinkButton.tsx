import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

const LinkButton: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}): IStyle => ({
    marginRight: theme.spacing.space1,
    cursor: 'pointer',
    '& > a': {
      color: theme.colors.text,
      paddingTop: 5,
      paddingRight: 8,
      paddingBottom: 5,
      paddingLeft: 8,
      background: '#dedede',
      textDecoration: 'none',
      borderRadius: 3,
    },
  })
  const renderButton = ({className}: RenderProps<Theme>) => (
    <span className={className}>
      {children}
    </span>
  )
  return (
    <FelaComponent style={style}>
      {renderButton}
    </FelaComponent>
  )
}

export default LinkButton
