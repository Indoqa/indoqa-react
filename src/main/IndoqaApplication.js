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
    const {reducerProvider, routes} = this.props
    const store = createReduxStore(reducerProvider)

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
  reducerProvider: PropTypes.func.isRequired,
  routes: PropTypes.object.isRequired,
}

export default IndoqaApplication
