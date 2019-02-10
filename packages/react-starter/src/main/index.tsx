import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {IndoqaApplication} from '@indoqa/react-app'
import {createRenderer} from '@indoqa/style-system'

import App from './app/App'
import createStore from './app/createStore'
import fela from './app/fela'
import history from './app/history'

const store = createStore()
const rootEl =  document.getElementById('app')
const renderer = createRenderer(fela)

ReactDOM.render(
  <IndoqaApplication history={history} store={store} renderer={renderer}>
    <App />
  </IndoqaApplication>,
  rootEl,
)

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require('./app/App.tsx').default
    ReactDOM.render(
      <IndoqaApplication history={history} store={store} renderer={renderer}>
        <NextApp />
      </IndoqaApplication>,
      rootEl,
    )
  })
}
