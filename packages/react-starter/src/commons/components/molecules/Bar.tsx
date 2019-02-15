import {CSSProperties} from 'react'
import {createComponent} from 'react-fela'
import {FelaProps, WithChildren} from '../../../app/types'

const Bar = ({theme}: FelaProps): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingLeft: theme.spacing.space2,
  paddingRight: theme.spacing.space2,
  height: theme.layout.actionBarHeight,
  backgroundColor: theme.colors.primaryLight,
  width: 'auto',
})

export default createComponent<WithChildren, any, HTMLDivElement>(Bar, 'div')
