import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {createEpicMiddleware, combineEpics} from 'redux-observable'

const createReduxStore = (reduxConfig) => {
  const isProduction = process.env.NODE_ENV === 'production'

  const combinedReducer = combineReducers(reduxConfig.reducers)
  const epicMiddleware = (reduxConfig.epics) ? createEpicMiddleware(combineEpics(...reduxConfig.epics)) : undefined
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
    const reducerPath = (reduxConfig.reducerHotReloadingPath) ? reduxConfig.reducerHotReloadingPath : './reducers'
    const epicPath = (reduxConfig.epicHotReloadingPath) ? reduxConfig.reducerHotReloadingPath : './epics'

    module.hot.accept(reducerPath, () => {
      const nextRootReducer = combineReducers(reduxConfig.reducers)
      store.replaceReducer(nextRootReducer)
    })

    if (epicMiddleware) {
      module.hot.accept(epicPath, () => {
        epicMiddleware.replaceEpic(reduxConfig.epics)
      })
    }
  }

  return store
}

export default createReduxStore
