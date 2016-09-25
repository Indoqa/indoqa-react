# Indoqa React Application
A higher level component that provides a ready-to-use setup of redux and react-router. 

## Motivation



## Features

  * Hot Reloading
  * Redux Middlewares
    * [react-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
    * [react-multi](https://github.com/ashaffer/redux-multi)
    * Dependency injection
  * Redux Dev Tools
    * [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
    * [redux-logger](https://github.com/evgenyrodionov/redux-logger)
  * React Router 
    
## Configuration


    
## Usage

List all reducers and expose them in a separate 'reducer.js' module file. 
```javascript
import reducerFoo from './path/to/reducer/foo'
import reducerBar from './path/to/reducer/bar'

export default {
  reducerFoo,
  reducerBar
}
```

Define routes in 'routes.js'.
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

Finally, render the app in the main 'index.js'
```javascript
import React from 'react'
import {render} from 'react-dom'
import IndoqaApplication from 'indoqa-react-app'
import routes from './routes'

render(
  <IndoqaApplication pathToReducers={'./reducers'} routes={routes} />,
  document.getElementById('app')
)
```
    
