import {Box} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'

import {Theme} from '../../../app/theme'

const MenuLink: React.FC = ({children}) => {
  const {theme} = useFela<Theme>()
  const style: IStyle = {
    textTransform: 'uppercase',
    cursor: 'pointer',
    borderBottom: '1px solid #f5f5f5',
    padding: theme.spacing.space1,
    margin: theme.spacing.space1,
    '> .active': {
      color: theme.colors.text,
      fontWeight: 'bold',
      cursor: 'auto',
      textDecoration: 'none',
    },
  }
  return (
    <Box style={style}>
      {children}
    </Box>
  )
}

export default MenuLink
