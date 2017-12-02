import {applyMiddleware, compose, createStore} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {createLogger} from 'redux-logger'

const createIndoqaStore = ({rootReducer, rootEpic, initialState = {}}) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const epicMiddleware = createEpicMiddleware(rootEpic)
  const middlewares = [epicMiddleware]

  if (isProduction || typeof window === 'undefined') {
    return {
      reduxStore: createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
      ),
      epicMiddleware,
    }
  }

  const logger = createLogger({
    collapsed: true,
  })
  middlewares.push(logger)

  const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : (f) => f

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
