import {createStore, Store, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable'
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'
import {History} from 'history'

export declare interface IndoqaStoreParams {
  rootReducer: any,
  rootEpic: any,
  initialState?: any,
  enableLogging: boolean,
  history: History,
}

export declare interface IndoqaStore {
  reduxStore: Store<any>,
  epicMiddleware: any,
}

export const createIndoqaStore = ({rootReducer, rootEpic, initialState = {}, enableLogging, history}: IndoqaStoreParams):
IndoqaStore => {
  const epicMiddleware: any = createEpicMiddleware()
  const middleware = [epicMiddleware, routerMiddleware(history)]

  if (enableLogging) {
    const logger = createLogger({
      collapsed: true,
    })
    middleware.push(logger)
  }

  const w: any = window as any
  const devToolsExtension = typeof window !== 'undefined' && w.devToolsExtension ?
    w.devToolsExtension() :
    (f: any) => f

  const indoqaStore = {
    reduxStore: createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middleware),
        devToolsExtension,
      ),
    ),
    epicMiddleware,
  }

  epicMiddleware.run(rootEpic)

  return indoqaStore
}
