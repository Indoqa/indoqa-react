import {BaseCssProps, createRenderer, renderRebootCss} from '@indoqa/style-system'
import * as React from 'react'
import {RendererProvider, ThemeProvider} from 'react-fela'
import {Router} from 'react-router'
import {Route, Switch} from 'react-router-dom'
import StyleSystemUIExplorer from '../StyleSystemUIExplorer'
import fela from './fela'
import history from './history'
import theme from './theme'

const renderer = createRenderer(fela)

const baseCssProps: BaseCssProps = {
  spacing: {
    space1: theme.spacing.space1,
    space2: theme.spacing.space2,
  },
  fontSizes: {
    text: theme.fontSizes.text,
    h1: theme.fontSizes.extraBig,
    h2: theme.fontSizes.veryBig,
    h3: theme.fontSizes.big,
  },
  fontStyles: {
    text: theme.fontStyles.text,
    headline: theme.fontStyles.headline,
  },
  links: {
    base: theme.colors.primaryDark,
    hover: theme.colors.primaryDark,
    active: theme.colors.primaryDark,
    visited: theme.colors.primaryDark,
  },
}

class App extends React.Component {

  public componentDidMount() {
    renderRebootCss(renderer, baseCssProps)
  }

  public render() {
    return (
      <RendererProvider renderer={renderer}>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route path="/" component={StyleSystemUIExplorer}/>
            </Switch>
          </ThemeProvider>
        </Router>
      </RendererProvider>
    )
  }
}

export default App
