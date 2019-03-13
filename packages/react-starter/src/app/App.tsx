import {BaseCssProps, Box, renderRebootCss} from '@indoqa/style-system'
import * as React from 'react'
import {ThemeProvider, useFela} from 'react-fela'
import {I18nextProvider} from 'react-i18next'
import Loadable from 'react-loadable'
import {Route, Switch} from 'react-router-dom'

import MainMenuTemplate from '../commons/components/templates/MainMenuTemplate'
import UploadPage from '../upload/pages/UploadPage'
import WordsPage from '../words/pages/WordsPage'
import i18n from './i18n'
import theme from './theme'

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
}

const Loading = () => (
  <MainMenuTemplate title="Overview">
    <Box m={2}>Loading ...</Box>
  </MainMenuTemplate>
)

const OverviewPage = Loadable({
  loader: () => import('../overview/pages/OverviewPage'),
  loading: Loading,
})

const TimePage = Loadable({
  loader: () => import('../time/pages/TimePage'),
  loading: Loading,
})

const FormsApp = Loadable({
  loader: () => import('../forms/FormsApp'),
  loading: Loading,
})

const App: React.FC = () => {
  const {renderer} = useFela()
  React.useLayoutEffect(() => {
    renderRebootCss(renderer, baseCssProps)
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Switch>
          <Route exact path="/" component={OverviewPage}/>
          <Route exact path="/time" component={TimePage}/>
          <Route exact path="/words" component={WordsPage}/>
          <Route path="/forms" component={FormsApp}/>
          <Route path="/upload" component={UploadPage}/>
        </Switch>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
