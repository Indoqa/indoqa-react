import React from 'react'
import PropTypes from 'prop-types'
import {Provider as Redux} from 'react-redux'
import {IndoqaFela} from 'indoqa-react-fela'
import {ConnectedRouter} from 'react-router-redux'

const IndoqaApplication = ({store, fela, history, children}) => {
  return (
    <Redux store={store}>
      <IndoqaFela fela={fela}>
        <ConnectedRouter history={history}>
          {children}
        </ConnectedRouter>
      </IndoqaFela>
    </Redux>
  )
}

IndoqaApplication.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fela: PropTypes.object,
}

IndoqaApplication.defaultProps = {
  fela: {},
}

export default IndoqaApplication
