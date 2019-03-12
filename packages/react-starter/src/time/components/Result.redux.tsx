// @flow
import {connect} from 'react-redux'
import {RootState} from '../../app/types'
import Result from './Result'
import {selectError, selectLoadingFlag, selectResults} from '../store/time.selectors'

const mapStateToProps = (state: RootState) => {
  return ({
    results: selectResults(state),
    error: selectError(state),
    isLoading: selectLoadingFlag(state),
  })
}

export default connect(mapStateToProps)(Result)
