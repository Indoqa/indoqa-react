# Indoqa React Application
A higher level component that provides a ready-to-use setup of redux and react-router. 

## Motivation
Working on different react applications, we ended up writing the same `createStore()`, `<Provider>` and `<Router>` initialization code ever again. To avoid this duplicity, we extracted this component that covers middleware configuration, routing and dev tool setup. Only the app specific routes and reducers need to be passed as props.


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
<IndoqaApplication reducerConfig={reducerConfig} routes={routes} />
```

The *routes* property configures the react-router and accepts a single Route, nested Routes or an array of (optionally nested) Routes. 

The *reducerConfig* configures the main reducer for redux. To make hot-reloading available, the main reducer is not passed directly. An object containing the *filePath* of the reducer definition file and a *getReducers()* factory function that actually interpretes this file is accepted instead. 
    
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

const reducerConfig = {
  filePath: './reducers',
  getReducers: () => require('./reducers').default
}

render(
  <IndoqaApplication reducerConfig={reducerConfig} routes={routes} />,
  document.getElementById('app')
)
```
    
