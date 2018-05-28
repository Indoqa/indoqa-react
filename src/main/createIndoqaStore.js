import {applyMiddleware, compose, createStore} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'

const createIndoqaStore = ({rootReducer, rootEpic, initialState = {}, history, enableLogging = false}) => {
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const middlewares = [epicMiddleware, routerMiddleware(history)]
  if (enableLogging) {
    const logger = createLogger({
      collapsed: true,
    })
    middlewares.push(logger)
  }

  const devToolsExtension = typeof window !== 'undefined' && window.devToolsExtension ?
    window.devToolsExtension() :
    (f) => f

  return {
    reduxStore: createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middlewares),
        devToolsExtension
      )
    ),
    epicMiddleware,
  }
}

export default createIndoqaStore
