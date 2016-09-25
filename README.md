# Indoqa React Application
A higher level component that provides a ready-to-use setup of redux and react-router. 

## Motivation



## Features

  * Hot Reloading
  * Redux Middlewares
    * [react-promise-middleware](https://github.com/pburtchaell/redux-promise-middleware)
    * [react-multi](https://github.com/ashaffer/redux-multi) to optionally dispatch multiple actions at once.
    * Dependency injection to optionally access the current state in actions.
  * Redux Dev Tools
    * [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
    * [redux-logger](https://github.com/evgenyrodionov/redux-logger)
  * React Router
    * Basic router setup.
    
## Configuration


    
## Usage

List all reducers and expose them in a separate 'reducer.js' module file. 
```javascript
import reducerFoo from './reducers/foo'
import reducerBar from './reducers/bar'

export default {
  reducerFoo,
  reducerBar
}
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
    
