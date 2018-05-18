import React from 'react'
import PropTypes from 'prop-types'
import {Provider as Redux} from 'react-redux'
import {IndoqaFela} from 'indoqa-react-fela'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const IndoqaApplication = ({store, fela, children}) => {
  return (
    <Redux store={store}>
      <IndoqaFela fela={fela}>
        <ConnectedRouter history={createHistory()}>
          {children}
        </ConnectedRouter>
      </IndoqaFela>
    </Redux>
  )
}

IndoqaApplication.propTypes = {
  store: PropTypes.object.isRequired,
  fela: PropTypes.object,
}

IndoqaApplication.defaultProps = {
  fela: {},
}

export default IndoqaApplication
