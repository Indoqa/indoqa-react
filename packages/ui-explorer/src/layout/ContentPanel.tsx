import {Box} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'
import {scrollbarStyles} from './scrollbarStyles'

const ContentPanel: React.FC<WithUIETheme> = ({children, uieTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    backgroundColor: uieTheme.colors.bgContent,
    overflow: 'auto',
    ...scrollbarStyles(uieTheme),
  }
  return (
    <Box fullWidth fullHeight style={style}>
      {children}
    </Box>
  )
}

export default withUIETheme(ContentPanel)
