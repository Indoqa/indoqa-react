import {Box} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'
import {Theme} from '../../../app/theme'

const Content: React.FC = ({children}) => {
  const {theme} = useFela<Theme>()
  const style: IStyle = {
    padding: theme.spacing.space2,
    width: '100%',
    desktop: {
      marginLeft: theme.layout.menuWidth,
    },
    tablet: {
      marginLeft: theme.layout.menuWidth,
    },
    print: {
      marginLeft: 0,
    },
  }
  return (
    <Box style={style}>
      {children}
    </Box>
  )
}

export default Content
