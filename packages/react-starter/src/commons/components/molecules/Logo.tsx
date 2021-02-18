import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, useFela} from 'react-fela'
import {Theme} from '../../../app/theme'

interface Props {
  logoHeight: number,
}

const Logo: React.FC<Props> = ({children, logoHeight}) => {
  const {theme} = useFela<Theme>()
  const style: IStyle = ({
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
