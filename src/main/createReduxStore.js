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
  const handleError = () => {
    // Currently we swallow all global "Uncaught (in Promise)" errors.
    // _ERROR actions (including the cause) are dispatched anyways,
    // so they are not "uncaught" in a logical sense.
  }

  const result = next(action)
  const resultIsPromise = result && typeof result.then === 'function'

  if (resultIsPromise) {
    return result.catch(handleError)
  }

  return result
}


const createReduxStore = (reduxConfig) => {
  const combinedReducer = combineReducers(reduxConfig.getReducers())

  const promiseMiddleware = createPromiseMiddleware({promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']})
  const promiseErrorCatchingMiddleware = createPromiseErrorCatchingMiddleware()
  const loggerMiddleware = createLoggerMiddleware({
    collapsed: true,
    stateTransformer: state => JSON.parse(JSON.stringify(state))
  })
  const injectMiddleware = createInjectMiddleware()
  const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : f => f

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
