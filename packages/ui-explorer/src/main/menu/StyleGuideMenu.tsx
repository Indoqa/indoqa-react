import {Box} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {WithUIETheme, withUIETheme} from '../sgtheme/withUIETheme'

interface StyleGuideMenuCSSProps extends IStyle {
  tablet: IStyle,
}

const StyleGuideMenu: React.FC<WithUIETheme> = ({children, uieTheme}) => {
  const style: StyleGuideMenuCSSProps = {
    boxSizing: 'border-box',
    backgroundColor: uieTheme.colors.primary,
    marginBottom: uieTheme.spacing.space4,
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

export default withUIETheme(StyleGuideMenu)
