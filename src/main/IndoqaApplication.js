import React, {PropTypes} from 'react'
import createReduxStore from './createReduxStore'
import {Provider} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import enableHotReloading from './enableHotReloading'

class IndoqaApplication extends React.Component {

  componentWillMount() {
    enableHotReloading()
  }

  render() {
    const {pathToReducers, routes} = this.props
    const store = createReduxStore(pathToReducers)

    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    )
  }
}

IndoqaApplication.propTypes = {
  pathToReducers: PropTypes.string.isRequired,
  routes: PropTypes.object.isRequired,
}

export default IndoqaApplication
