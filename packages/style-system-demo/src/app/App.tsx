import {BaseCssProps, createFelaConfig, renderRebootCss} from '@indoqa/style-system'
import {createRenderer} from 'fela'
import * as React from 'react'
import {RendererProvider, ThemeProvider} from 'react-fela'
import {Route, Routes} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import StyleSystemUIExplorer from '../StyleSystemUIExplorer'
import theme from './theme'

const felaConfig = createFelaConfig()
const renderer = createRenderer(felaConfig)

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
    base: theme.fontStyles.base,
    alt: theme.fontStyles.alt,
  },
  links: {
    base: theme.colors.primaryDark,
    hover: theme.colors.primaryDark,
    active: theme.colors.primaryDark,
    visited: theme.colors.primaryDark,
  },
  colors: {
    text: theme.colors.text,
  },
}

const App: React.FC = () => {
  React.useLayoutEffect(() => {
    renderRebootCss(renderer, baseCssProps)
  }, [])
  return (
    <RendererProvider renderer={renderer}>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<StyleSystemUIExplorer theme={theme} />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </RendererProvider>
  )
}

export default App
