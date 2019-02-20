import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

interface Props {
  onClick: (e: React.MouseEvent) => void,
}

const Button: React.FC<Props> = ({onClick, children}) => {
  const style: StyleFunction<Theme> = ({theme}): IStyle => {
    return {
      marginRight: theme.spacing.space1,
      color: theme.colors.text,
      paddingTop: 6,
      paddingRight: 8,
      paddingBottom: 6,
      paddingLeft: 8,
      background: '#dedede',
      textDecoration: 'none',
      borderRadius: 3,
      borderStyle: 'none',
      display: 'inline',
      cursor: 'pointer',
    }
  }
  const renderButton = ({className}: RenderProps<Theme>) => (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  )
  return (
    <FelaComponent style={style}>
      {renderButton}
    </FelaComponent>
  )
}

export default Button
