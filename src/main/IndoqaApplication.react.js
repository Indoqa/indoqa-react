import React from 'react'
import PropTypes from 'prop-types'
import {Provider as Redux} from 'react-redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import {IndoqaFela} from 'indoqa-react-fela'

const IndoqaApplication = ({store, routerConfig, fela}) => {
  const history = syncHistoryWithStore(
    routerConfig.history ? routerConfig.history : browserHistory,
    store
  )

  return (
    <Redux store={store}>
      <IndoqaFela fela={fela}>
        <Router history={history}>
          {routerConfig.routes}
        </Router>
      </IndoqaFela>
    </Redux>
  )
}

IndoqaApplication.propTypes = {
  store: PropTypes.object.isRequired,
  routerConfig: PropTypes.object.isRequired,
  fela: PropTypes.object,
}

IndoqaApplication.defaultProps = {
  fela: {},
}

export default IndoqaApplication
