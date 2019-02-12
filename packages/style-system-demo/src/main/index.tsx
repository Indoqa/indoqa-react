import 'react-app-polyfill/ie11'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './app/App'
import './app/polyfills/domAppendPolyfill'
import './app/polyfills/stringStartsWithPolyfill'

const rootEl = document.getElementById('app')

ReactDOM.render(<App/>, rootEl)

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NextApp = require('./app/App.tsx').default
    ReactDOM.render(<NextApp/>, rootEl)
  })
}
