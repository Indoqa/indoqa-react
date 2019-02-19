import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

interface ButtonStyleProps extends CSSProperties {
  '& > a': CSSProperties,
}

const ButtonLink: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}): ButtonStyleProps => {
    return ({
      '& > a': {
        color: theme.colors.text,
        display: 'block',
        height: '100%',
        textDecoration: 'none',
      },
    })
  }
  const renderButton = ({className}: RenderProps<Theme>) => (
    <button className={className}>
      {children}
    </button>
  )
  return (
    <FelaComponent style={style}>
      {renderButton}
    </FelaComponent>
  )
}

export default ButtonLink
