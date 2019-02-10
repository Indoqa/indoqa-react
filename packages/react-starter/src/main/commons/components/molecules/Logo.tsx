import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

interface LogoStyleProps extends CSSProperties {
  '> a': CSSProperties,
}

export declare interface Props extends Types.WithChildren {
  'data-logo-height': number,
}

const Logo = ({theme, 'data-logo-height': logoHeight}: Props & Types.FelaProps): LogoStyleProps => {
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
