import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import {FelaProps, WithChildren} from '../../../app/types'

interface LogoStyleProps extends CSSProperties {
  '> a': CSSProperties,
}

export declare interface Props extends WithChildren {
  'data-logo-height': number,
}

const Logo = ({theme, 'data-logo-height': logoHeight}: Props & FelaProps): LogoStyleProps => {
  return ({
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
}

export default createComponentWithProxy<Props, any, HTMLDivElement>(Logo, 'div')
