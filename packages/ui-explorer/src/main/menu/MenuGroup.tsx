import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import Heading from '../layout/Heading'
import {WithUIETheme, withUIETheme} from '../sgtheme/withUIETheme'

interface Props extends WithUIETheme {
  name?: string,
}

const List: React.FC = ({children}) => {
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

const MenuGroup: React.FC<Props> = ({uieTheme, name, children}) => {
  const style: IStyle = {
    paddingTop: uieTheme.spacing.space2,
    paddingLeft: uieTheme.spacing.space4,
  }
  return (
    <FelaComponent style={style}>
      {name && <Heading as="h3">{name}</Heading>}
      <List>
        {children}
      </List>
    </FelaComponent>
  )
}

export default withUIETheme(MenuGroup)
