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
    const {reduxConfig, routerConfig} = this.props
    const store = createReduxStore(reduxConfig)
    const history = (routerConfig.history) ? routerConfig.history : browserHistory

    return (
      <Provider store={store}>
        <Router history={history}>
          {routerConfig.routes}
        </Router>
      </Provider>
    )
  }
}

IndoqaApplication.propTypes = {
  reduxConfig: PropTypes.object.isRequired,
  routerConfig: PropTypes.object.isRequired,
}

export default IndoqaApplication
