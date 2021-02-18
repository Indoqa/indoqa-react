import {Box, PStyle} from '@indoqa/style-system'
import * as React from 'react'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'
import {scrollbarStyles} from './scrollbarStyles'

const Menu: React.FC<WithUIETheme> = ({children, uieTheme}) => {
  const style: PStyle = {
    boxSizing: 'border-box',
    backgroundColor: uieTheme.colors.bgMenu,
    ...scrollbarStyles(uieTheme),
    tablet: {
      overflowY: 'auto',
      borderBottom: 'none',
    }
  }
  return (
    <Box fullWidth fullHeight style={style}>
      {children}
    </Box>
  )
}

export default withUIETheme(Menu)
