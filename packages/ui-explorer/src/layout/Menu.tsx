import {Box} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'
import {scrollbarStyles} from './scrollbarStyles'

interface StyleGuideMenuCSSProps extends IStyle {
  tablet: IStyle,
}

const Menu: React.FC<WithUIETheme> = ({children, uieTheme}) => {
  const style: StyleGuideMenuCSSProps = {
    boxSizing: 'border-box',
    backgroundColor: uieTheme.colors.bgMenu,
    ...scrollbarStyles(uieTheme),
    tablet: {
      overflowY: 'auto',
      borderBottom: 'none',
    },
  }
  return (
    <Box fullWidth fullHeight style={style}>
      {children}
    </Box>
  )
}

export default withUIETheme(Menu)
