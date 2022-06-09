import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'

interface Props extends WithUIETheme {
  name: string
}

const Header: React.FunctionComponent<React.PropsWithChildren<WithUIETheme>> = ({uieTheme, children}) => {
  const style: IStyle = {
    backgroundColor: uieTheme.colors.bgPanelHeader,
    textTransform: 'uppercase',
    ...uieTheme.fontStyles.headline,
    fontSize: uieTheme.fontSizes.small,
    color: uieTheme.colors.textPanelHeading,
    padding: uieTheme.spacing.space2,
    borderRadius: '1px',
    marginBottom: uieTheme.spacing.space2,
  }
  return <FelaComponent style={style}>{children}</FelaComponent>
}

const Container: React.FC<React.PropsWithChildren<WithUIETheme>> = ({uieTheme, children}) => {
  const style: IStyle = {
    backgroundColor: uieTheme.colors.bgContent,
    borderRadius: '3px',
    marginBottom: '2rem',
    width: '100%',
  }
  return <FelaComponent style={style}>{children}</FelaComponent>
}

const Content: React.FC<React.PropsWithChildren<WithUIETheme>> = ({uieTheme, children}) => {
  const style: IStyle = {
    paddingLeft: uieTheme.spacing.space2,
    paddingTop: uieTheme.spacing.space2,
  }
  return <FelaComponent style={style}>{children}</FelaComponent>
}

const FontStylePanelInternal: React.FC<React.PropsWithChildren<Props>> = ({uieTheme, name, children}) => {
  return (
    <Container uieTheme={uieTheme}>
      <Header uieTheme={uieTheme}>{name}</Header>
      <Content uieTheme={uieTheme}>{children}</Content>
    </Container>
  )
}

export const FontStylePanel = withUIETheme(FontStylePanelInternal)
