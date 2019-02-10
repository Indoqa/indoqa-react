import {CSSProperties} from 'react'
import {createComponent} from 'react-fela'
import Types from 'Types'

const Bar = ({theme}: Types.FelaProps): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: theme.spacing.space2,
  paddingRight: theme.spacing.space2,
  height: theme.layout.actionBarHeight,
  backgroundColor: theme.colors.primaryLight,
  width: 'auto',
})

export default createComponent<Types.WithChildren, any, HTMLDivElement>(Bar, 'div')
