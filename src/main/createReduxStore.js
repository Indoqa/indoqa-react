import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import createPromiseMiddleware from 'redux-promise-middleware'
import multiMiddleware from 'redux-multi'
import createLoggerMiddleware from 'redux-logger'

const createInjectMiddleware = () => store => next => action => {
  const injectedDependencies = {
    store,
    dispatch: store.dispatch,
    getState: store.getState,
  }

  if (typeof action !== 'function') {
    return next(action)
  }

  const result = action(injectedDependencies)
  if (typeof result !== 'undefined') {
    return next(result)
  }

  return result
}

const createReduxStore = (reducerProvider) => {
  const combinedReducer = combineReducers(reducerProvider())

  const promiseMiddleware = createPromiseMiddleware({promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']})
  const loggerMiddleware = createLoggerMiddleware({
    collapsed: true,
    stateTransformer: state => JSON.parse(JSON.stringify(state))
  })
  const injectMiddleware = createInjectMiddleware()
  const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f

  const store = createStore(
    combinedReducer,
    compose(
      applyMiddleware(injectMiddleware, promiseMiddleware, loggerMiddleware, multiMiddleware),
      devToolsEnhancer
    )
  )

  if (module.hot) {
    module.hot.accept(pathToReducers, () => {
      const nextRootReducer = combineReducers(reducerProvider())
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default createReduxStore
