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

// see https://github.com/pburtchaell/redux-promise-middleware/issues/75
const createPromiseErrorCatchingMiddleware = () => () => next => action => {
  const result = next(action)
  const resultIsPromise = result && typeof result.then === 'function'

  if (resultIsPromise) {
    return result.catch(() => {
      /* Currently we swallow all global "Uncaught (in Promise)" errors.
       * _ERROR actions (including the cause) are dispatched anyways,
       * so they are not "uncaught" in a logical sense. */
    })
  }

  return result
}

const createReduxStore = (reduxConfig) => {
  const isProduction = process.env.NODE_ENV === 'production'

  const combinedReducer = combineReducers(reduxConfig.getReducers())

  const promiseMiddleware = createPromiseMiddleware({promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']})
  const promiseErrorCatchingMiddleware = createPromiseErrorCatchingMiddleware()
  const injectMiddleware = createInjectMiddleware()

  if (isProduction) {
    return createStore(
      combinedReducer,
      applyMiddleware(injectMiddleware, promiseErrorCatchingMiddleware, promiseMiddleware, multiMiddleware)
    )
  }

  const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f
  const loggerMiddleware = createLoggerMiddleware({
    collapsed: true,
    stateTransformer: state => JSON.parse(JSON.stringify(state))
  })

  const store = createStore(
    combinedReducer,
    compose(
      applyMiddleware(injectMiddleware, promiseErrorCatchingMiddleware, promiseMiddleware, loggerMiddleware, multiMiddleware),
      devToolsEnhancer
    )
  )

  if (module.hot) {
    module.hot.accept(reduxConfig.reducerFilePath, () => {
      const nextRootReducer = combineReducers(reduxConfig.getReducers())
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default createReduxStore
