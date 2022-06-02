import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'
import MenuHeading from './MenuHeading'

interface Props extends WithUIETheme {
  name?: string
}

const List: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  const style: IStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }
  return (
    <FelaComponent style={style} as="ul">
      {children}
    </FelaComponent>
  )
}

const MenuGroup: React.FC<React.PropsWithChildren<Props>> = ({uieTheme, name, children}) => {
  const style: IStyle = {
    paddingLeft: uieTheme.spacing.space4,
    paddingBottom: uieTheme.spacing.space3,
  }
  return (
    <FelaComponent style={style}>
      {name && <MenuHeading>{name}</MenuHeading>}
      <List>{children}</List>
    </FelaComponent>
  )
}

export default withUIETheme(MenuGroup)
