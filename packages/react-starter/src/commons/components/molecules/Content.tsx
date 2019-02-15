import {createComponent} from 'react-fela'
import {CSSPropertiesWithBreakpointExtensions, FelaProps, WithChildren} from '../../../app/types'

const Content = ({theme}: FelaProps): CSSPropertiesWithBreakpointExtensions => ({
  padding: theme.spacing.space2,
  width: '100%',
  desktop: {
    marginLeft: theme.layout.menuWidth,
  },
  tablet: {
    marginLeft: theme.layout.menuWidth,
  },
})

export default createComponent<WithChildren, any, HTMLDivElement>(Content, 'div')
