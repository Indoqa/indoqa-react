import {connect} from 'react-redux'

import {fetchWords, cancelFetchWords} from '../store/words.actions'
import {WordsState} from '../store/words.types'
import WordsSearch from './WordsSearch'
import {selectError, selectLoadingFlag, selectPrefix, selectResults} from '../store/words.selectors'

const mapStateToProps = (state: WordsState) => ({
  prefix: selectPrefix(state),
  results: selectResults(state),
  error: selectError(state),
  isLoadingFlag: selectLoadingFlag(state),
})

export default connect(mapStateToProps, {fetchWords, cancelFetchWords})(WordsSearch)
