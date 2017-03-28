# Indoqa React Application
A higher order component that provides a ready-to-use setup of redux and react-router. 

## Motivation
Working on different react applications, we ended up writing the same `createStore()`, `<Provider>` and `<Router>` initialization code again and again. To avoid this duplicity, we extracted this component that covers middleware configuration, routing and dev tool setup. Only app specific routes and reducers need to be passed as props.


## Features

  * Redux Middleware
    * [react-observable](https://github.com/redux-observable/redux-observable)
  * Redux Dev Tools
    * [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
    * [redux-logger](https://github.com/evgenyrodionov/redux-logger)
    * Hot Reloading
  * React Router 
    
## Usage
```javascript
<IndoqaApplication reduxConfig={reduxConfig} routerConfig={routerConfig} />
```
Application specific configuration of redux and router is passed as config objects.

### reduxConfig

```javascript
const reduxConfig = {
  epics: require('./epics').default,, // factory function that creates a list of epics
  reducers: require('./reducers').default,, // factory function that creates an object of reducers,
  epicHotReloadingPath: './epics' // file path to listen to epic file changes (default './epics')
  reducerHotReloadingPath: './reducers' // file path to listen to reducer file changes (default './reducers')
}
```

  * To get hot-reloading working, the root reducer and the epics are not passed directly. Factory functions *epics* and *reducers* need to be bound to current scope in your index.js (using an arrow function). 
  * Hot reloading paths *epicHotReloadingPath* and *reducerHotReloadingPath* are used
to detect file changes. 
  * After a file change is detected, the factory function is executed again and epics/reducers are replaced. Hot reloading paths are optional and fall back to './epics' and './reducers'

### routerConfig
```javascript
const routerConfig = {
  routes: myRoutes, // a single (optionally nested Route) or an array of Routes
  history: browserHistory|hashHistory // optional, defaults to browserHistory
}
```
    
## Example

Define routes in 'routes.js'
```javascript
import React from 'react'
import {IndexRoute, Route} from 'react-router'
import App from './path/to/app'
import FooPage from './path/to/FooPage'
import BarPage from './path/to/BarPage'

export default (
  <Route component={App} path="/">
    <IndexRoute component={FooPage} />
    <Route component={BarPage} path="/bar" />
  </Route>
)
```

List all reducers and expose them in a separate 'reducer.js' module file
```javascript
import reducerFoo from './path/to/reducer/foo'
import reducerBar from './path/to/reducer/bar'

export default {
  reducerFoo,
  reducerBar
}
```

List all epics and expose them in a separate 'epics.js' module file
```javascript
import epicsFoo from './path/to/epics/foo'
import epicsBar from './path/to/epics/bar'

export default [
  ...epicsFoo,
  ...epicsBar
]

```

Finally, render the app in 'index.js'
```javascript
import React from 'react'
import {render} from 'react-dom'
import IndoqaApplication from 'indoqa-react-app'
import routes from './routes'

const reduxConfig = {
  reducers: require('./reducers').default,
  epics: require('./epics').default,
}

render(
  <IndoqaApplication reduxConfig={reduxConfig} routerConfig={{routes}} />,
  document.getElementById('app')
)
```
    
