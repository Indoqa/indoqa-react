import {connect} from 'react-redux'
import {selectResults} from '../store/words.selectors'

import WordsResults from './WordsResults'
import {WordsState} from '../store/words.types'

const mapStateToProps = (state: WordsState) => ({
  results: selectResults(state),
})

export default connect(mapStateToProps)(WordsResults)
