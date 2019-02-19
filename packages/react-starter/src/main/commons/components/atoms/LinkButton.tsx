import * as React from 'react'
import {CSSProperties} from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'

interface StyleProps extends CSSProperties {
  '& > a': CSSProperties,
}

const LinkButton: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}): StyleProps => ({
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
