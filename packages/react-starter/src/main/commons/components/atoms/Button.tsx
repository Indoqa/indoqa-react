import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import {FelaProps, WithChildren} from '../../../app/types'

const buttonStyles = ({theme}: FelaProps): CSSProperties => ({
  color: theme.colors.text,
})

export default createComponentWithProxy<WithChildren>(buttonStyles, 'button')

