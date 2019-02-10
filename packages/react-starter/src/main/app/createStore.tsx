import {createIndoqaStore} from '@indoqa/react-app'
import {Store} from 'redux'

const createStore = (): Store<any> => {
  const indoqaStore = createIndoqaStore({
    rootReducer: require('./rootReducer.ts').default,
    rootEpic: require('./rootEpic.ts').default,
    enableLogging: process.env.NODE_ENV !== 'production',
  })

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer.ts').default
      indoqaStore.reduxStore.replaceReducer(nextRootReducer)
    })

    if (indoqaStore.epicMiddleware) {
      module.hot.accept('./rootEpic', () => {
        indoqaStore.reduxStore.dispatch({ type: 'END' })
        const nextRootEpic = require('./rootEpic.ts').default
        indoqaStore.epicMiddleware.run(nextRootEpic)
      })
    }
  }

  return indoqaStore.reduxStore
}

export default createStore
