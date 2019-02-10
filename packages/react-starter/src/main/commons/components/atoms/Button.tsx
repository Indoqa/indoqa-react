import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

const buttonStyles = ({theme}: Types.FelaProps): CSSProperties => ({
  color: theme.colors.text,
})

export default createComponentWithProxy<Types.WithChildren>(buttonStyles, 'button')

