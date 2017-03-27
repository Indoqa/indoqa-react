import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {createEpicMiddleware, combineEpics} from 'redux-observable'

const createReduxStore = (reduxConfig) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const reducerFilePath = (reduxConfig.reducerFilePath) ? reduxConfig.reducerFilePath : './reducers'
  const epicFilePath = (reduxConfig.epicFilePath) ? reduxConfig.epicFilePath : './epics'

  const reducers = reduxConfig.lazyLoad(reducerFilePath)
  const combinedReducer = combineReducers(reducers)

  const epics = (reduxConfig.epicFilePath) ? reduxConfig.lazyLoad(epicFilePath) : undefined
  const epicMiddleware = (epics) ? createEpicMiddleware(combineEpics(...epics)) : undefined

  const middlewares = (epicMiddleware) ? applyMiddleware(epicMiddleware) : (createStore_) => createStore_

  if (isProduction) {
    return createStore(
      combinedReducer,
      reduxConfig.initialState,
      middlewares
    )
  }

  const devToolsEnhancer = window.devToolsExtension ? window.devToolsExtension() : (f) => f

  const store = createStore(
    combinedReducer,
    reduxConfig.initialState,
    compose(
      middlewares,
      devToolsEnhancer
    )
  )

  if (module.hot) {
    module.hot.accept(reduxConfig.reducerFilePath, () => {
      const nextRootReducer = combineReducers(reduxConfig.lazyLoad(reducerFilePath))
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default createReduxStore
