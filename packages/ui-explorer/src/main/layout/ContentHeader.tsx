import {Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {withUIETheme, WithUIETheme} from '../sgtheme/withUIETheme'

const ContentHeader: React.FC<WithUIETheme> = ({children, uieTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    height: uieTheme.layout.topMenuHeight,
    paddingLeft: uieTheme.spacing.space4,
    backgroundColor: uieTheme.colors.primaryLight,
  }
  return (
    <Flex fullWidth style={style} alignItems="center">
      {children}
    </Flex>
  )
}

export default withUIETheme(ContentHeader)
