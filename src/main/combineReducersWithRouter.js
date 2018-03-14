import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const combineReducersWithRouter = (reducers) => {
  return combineReducers({
    routing: routerReducer,
    ...reducers,
  })
}

export default combineReducersWithRouter
