import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import {FelaProps, WithChildren} from '../../../app/types'

const Menu = ({theme}: FelaProps): CSSProperties => ({
  width: theme.layout.menuWidth,
  height: '100%',
  backgroundColor: theme.colors.primaryLight,
})

export default createComponentWithProxy<WithChildren>(Menu)
