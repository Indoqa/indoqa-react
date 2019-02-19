import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

interface Props {
  onClick: any,
}

const Button: React.FC<Props> = ({onClick, children}) => {
  const style: StyleFunction<Theme> = ({theme}): IStyle => {
    return {
      color: theme.colors.text,
    }
  }
  const renderButton = () => (
    <button onClick={onClick} type="button">
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
