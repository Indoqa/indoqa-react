import {IndoqaApplication} from '@indoqa/react-app'
import {createFelaConfig} from '@indoqa/style-system'
import {createRenderer} from 'fela'

import * as React from 'react'
import 'react-app-polyfill/ie11'
import * as ReactDOM from 'react-dom'

import App from './app/App'
import createStore from './app/createStore'
import history from './app/history'

const store = createStore()
const rootEl = document.getElementById('app')
const felaConfig = createFelaConfig()
const renderer = createRenderer(felaConfig)

ReactDOM.render(
  <IndoqaApplication history={history} store={store} renderer={renderer}>
    <App/>
  </IndoqaApplication>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require('./app/App.tsx').default
    ReactDOM.render(
      <IndoqaApplication history={history} store={store} renderer={renderer}>
        <NextApp/>
      </IndoqaApplication>,
      rootEl,
    )
  })
}
