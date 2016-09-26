# Indoqa React Application
A higher level component that provides a ready-to-use setup of redux and react-router. 

## Motivation
Working on different react applications, we ended up writing the same `createStore()`, `<Provider>` and `<Router>` initialization code ever again. To avoid this duplicity, we extracted this component that covers middleware configuration, routing and dev tool setup. Only app specific routes and reducers need to be passed as props.


## Features

  * Redux Middlewares
    * [react-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
    * [react-multi](https://github.com/ashaffer/redux-multi)
    * Dependency injection
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
### routerConfig
```javascript
const routerConfig = {
  routes: myRoutes, // a single (optionally nested Route) or an array of Routes
  history: browserHistory|hashHistory // optional, defaults to browserHistory
}
```
### reduxConfig

```javascript
const reduxConfig = {
  reducerFilePath: './reducers', // location of root reducer file
  getReducers: () => require('./reducers').default // root reducer factory
}
```

To get hot-reloading working, the root reducer is not passed directly. Specify the disk location of the root reducer file in *reducerFilePath*. The *getReducers()* factory function actually interpretes this file is accepted instead. 
    
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

Finally, render the app in 'index.js'
```javascript
import React from 'react'
import {render} from 'react-dom'
import IndoqaApplication from 'indoqa-react-app'
import routes from './routes'

const reduxConfig = {
  reducerFilePath: './reducers',
  getReducers: () => require('./reducers').default
}

render(
  <IndoqaApplication reduxConfig={reduxConfig} routerConfig={{routes}} />,
  document.getElementById('app')
)
```
    
