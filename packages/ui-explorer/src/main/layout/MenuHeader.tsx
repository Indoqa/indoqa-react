import {Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'

const MenuHeader: React.FC<WithUIETheme> = ({children, uieTheme}) => {
  const style: IStyle = {
    boxSizing: 'border-box',
    height: uieTheme.layout.topMenuHeight,
  }
  return (
    <Flex fullWidth style={style} alignItems="center">
      {children}
    </Flex>
  )
}

export default withUIETheme(MenuHeader)
