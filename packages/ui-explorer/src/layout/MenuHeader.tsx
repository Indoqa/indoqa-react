import {Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'

const MenuHeader: React.FC<React.PropsWithChildren<WithUIETheme>> = ({children, uieTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    height: uieTheme.layout.topMenuHeight,
    paddingRight: uieTheme.spacing.space4,
  }
  return (
    <Flex fullWidth style={style} alignItems="center" justifyContent="space-between">
      {children}
    </Flex>
  )
}

export default withUIETheme(MenuHeader)
