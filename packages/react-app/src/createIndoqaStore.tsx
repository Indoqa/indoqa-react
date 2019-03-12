import {applyMiddleware, compose, createStore, Store} from 'redux'
import {createLogger} from 'redux-logger'
import {createEpicMiddleware} from 'redux-observable'

export declare interface IndoqaStoreParams {
  rootReducer: any,
  rootEpic: any,
  initialState?: any,
  enableLogging: boolean,
}

export declare interface IndoqaStore {
  reduxStore: Store<any>,
  epicMiddleware: any,
}

export const createIndoqaStore = ({rootReducer, rootEpic, initialState = {}, enableLogging}: IndoqaStoreParams):
  IndoqaStore => {
  const epicMiddleware: any = createEpicMiddleware()
  const middleware = [epicMiddleware]

  if (enableLogging) {
    const logger = createLogger({
      collapsed: true,
    })
    middleware.push(logger)
  }

  const w: any = window as any
  const devToolsExtension = typeof window !== 'undefined' && w.__REDUX_DEVTOOLS_EXTENSION__ ?
    w.__REDUX_DEVTOOLS_EXTENSION__() :
    (f: any) => f

  const indoqaStore = {
    reduxStore: createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middleware), devToolsExtension),
    ),
    epicMiddleware,
  }

  epicMiddleware.run(rootEpic)

  return indoqaStore
}
