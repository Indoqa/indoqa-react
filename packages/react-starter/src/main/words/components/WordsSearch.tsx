import * as React from 'react'
import {Box, Text} from '@indoqa/style-system'
import {createComponentWithProxy} from 'react-fela'
import Types from 'Types'

type Props = {
  fetchWords: any,
  cancelFetchWords: any,
  prefix: string,
  error: string,
  isLoadingFlag: boolean,
}

const inputFieldStyles = ({theme}: Types.FelaProps) => ({
  width: 300,
  padding: 4,
  marginRight: theme.spacing.space2,
})
const InputField = createComponentWithProxy<Types.WithChildren>(inputFieldStyles, 'input')

const WordsSearch = ({fetchWords, cancelFetchWords, prefix, isLoadingFlag, error}: Props) => {
  return (
    <Box>
      <Box>
        <InputField
          type="text"
          placeholder="Search for an English word"
          onChange={(e) => fetchWords(e.currentTarget.value)}
          value={prefix}
        />
        {isLoadingFlag && <button onClick={cancelFetchWords}>Cancel</button>}
      </Box>
      {error && <Text>{error}</Text>}
    </Box>
  )
}

export default WordsSearch
