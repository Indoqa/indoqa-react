import {Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'

const ContentHeader: React.FC<React.PropsWithChildren<WithUIETheme>> = ({children, uieTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    height: uieTheme.layout.topMenuHeight,
    paddingLeft: uieTheme.spacing.space4,
    backgroundColor: uieTheme.colors.bgContentHeader,
  }
  return (
    <Flex fullWidth style={style} alignItems="center">
      {children}
    </Flex>
  )
}

export default withUIETheme(ContentHeader)
