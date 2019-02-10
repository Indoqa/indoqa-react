// @flow
import {connect} from 'react-redux'
import * as Types from 'Types'
import Result from './Result'
import {selectError, selectLoadingFlag, selectResults} from '../store/time.selectors'

const mapStateToProps = (state: Types.RootState) => ({
  results: selectResults(state),
  error: selectError(state),
  isLoading: selectLoadingFlag(state),
})

export default connect(mapStateToProps)(Result)
