import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

interface Props extends CSSProperties {
  '& > a': CSSProperties,
}

const ButtonLink = ({theme}: Types.FelaProps): Props => ({
  '& > a': {
    color: theme.colors.text,
    display: 'block',
    height: '100%',
    textDecoration: 'none',
  },
})

export default createComponentWithProxy<Types.WithChildren>(ButtonLink, 'button')
