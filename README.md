# Indoqa React Application
A component that provides a ready-to-use setup of [Redux](http://redux.js.org/), react-router, [redux-observable](https://github.com/redux-observable/redux-observable) and [Fela](http://fela.js.org/docs/Introduction.html).

## Motivation
Working on different react applications, we ended up writing the same initialization code again and again. To avoid this duplicity, we extracted this component that covers middleware configuration, routing, Fela and dev tool setup. Only app specific routes, reducers, epics and a Fela configuration need to be passed as props.


## Features

  * Redux Middleware
    * [react-observable](https://github.com/redux-observable/redux-observable)
  * Redux Dev Tools
    * [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
    * [redux-logger](https://github.com/evgenyrodionov/redux-logger)
    * Hot Reloading
  * React Router
  * [Fela](http://fela.js.org/docs/Introduction.html) setup

## Usage
```javascript
<IndoqaApplication store={store} routerConfig={{routes}} fela={fela} />
```

### store

```javascript
import {createIndoqaStore} from 'indoqa-react-app'

const createStore = () => {
  const indoqaStore = createIndoqaStore({
    rootReducer: require('./rootReducer.js').default,
    rootEpic: require('./rootEpic.js').default,
    initialState: {},
  })

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer.js').default
      indoqaStore.reduxStore.replaceReducer(nextRootReducer)
    })

    if (indoqaStore.epicMiddleware) {
      module.hot.accept('./rootEpic', () => {
        const nextRootEpic = require('./rootEpic.js').default
        indoqaStore.epicMiddleware.replaceEpic(nextRootEpic)
      })
    }
  }

  return indoqaStore.reduxStore
}

export default createStore()
```

  * The indoqaStore is a wrapper around a Redux store and the rxjs-observable epic middleware.
  * After a file change of the rootEpic/rootReducers or of any referenced file is detected, the root epic and root reducer are reloaded.

### routerConfig
```javascript
const routerConfig = {
  routes: myRoutes, // a single (optionally nested Route) or an array of Routes
  history: browserHistory|hashHistory // optional, defaults to browserHistory
}
```

### Fela

Provide a [Indoqa-Fela](https://github.com/Indoqa/indoqa-react-fela) configuration.

## Example

See [indoqa-react-redux](https://github.com/Indoqa/indoqa-react-redux)
