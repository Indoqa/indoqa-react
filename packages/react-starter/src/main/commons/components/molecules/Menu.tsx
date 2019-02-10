import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

const Menu = ({theme}: Types.FelaProps): CSSProperties => ({
  width: theme.layout.menuWidth,
  height: '100%',
  backgroundColor: theme.colors.primaryLight,
})

export default createComponentWithProxy<Types.WithChildren>(Menu)
