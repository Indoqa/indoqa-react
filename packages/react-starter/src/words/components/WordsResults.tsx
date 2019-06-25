import {Box} from '@indoqa/style-system'
import * as React from 'react'

type Props = {
  results: string[],
}

const renderWords = (results: string[]) => {
  return results.map((word) => (
    <li key={word}>
      <a href={`http://www.wordnik.com/words/${word}`} target="_blank" rel="noopener noreferrer">
        {word}
      </a>
    </li>
  ))
}

const WordsResults = ({results}: Props) => {
  const poweredBy = (
    <Box mt={3}>
      <a href="http://wordnik.com/" target="_blank" rel="noopener noreferrer">
        <img alt="powered by Wordnik" src="http://www.wordnik.com/img/wordnik_badge_a2.png"/>
      </a>
    </Box>
  )

  return (
    <Box mt={1}>
      <ul>
        {renderWords(results)}
      </ul>
      {results.length > 0 && poweredBy}
    </Box>
  )
}

export default WordsResults
