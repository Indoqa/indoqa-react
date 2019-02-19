import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

interface ButtonStyleProps extends CSSProperties {
  '& > a': CSSProperties,
}

const ButtonLink: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}): ButtonStyleProps => {
    // TODO: style as button
    return ({
      marginRight: theme.spacing.space1,
      cursor: 'pointer',
      '& > a': {
        color: theme.colors.text,
        paddingTop: 3,
        paddingRight: 5,
        paddingBottom: 3,
        paddingLeft: 5,
        background: '#dedede',
        textDecoration: 'none',
        borderRadius: 3,
      },
    })
  }
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

export default ButtonLink
