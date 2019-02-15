import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import {FelaProps, WithChildren} from '../../../app/types'

interface Props extends CSSProperties {
  '& > a': CSSProperties,
}

const ButtonLink = ({theme}: FelaProps): Props => ({
  '& > a': {
    color: theme.colors.text,
    display: 'block',
    height: '100%',
    textDecoration: 'none',
  },
})

export default createComponentWithProxy<WithChildren>(ButtonLink, 'button')
