import {Box, Text} from '@indoqa/style-system'
import * as React from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../../app/theme'

type Props = {
  fetchWords: any,
  cancelFetchWords: any,
  prefix: string,
  error: string,
  isLoadingFlag: boolean,
}

interface InputFieldProps {
  type: string,
  placeholder: string,
  onChange: any,
  value: string,
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const style: StyleFunction<Theme> = ({theme}) => ({
    width: 300,
    padding: 4,
    marginRight: theme.spacing.space2,
  })
  const renderInputField = ({className}: RenderProps<Theme>) => {
    return <input className={className} {...props} />
  }
  return (
    <FelaComponent style={style}>
      {renderInputField}
    </FelaComponent>
  )
}

const WordsSearch = ({fetchWords, cancelFetchWords, prefix, isLoadingFlag, error}: Props) => {
  return (
    <Box>
      <Box>
        <InputField
          type="text"
          placeholder="Search for an English word"
          onChange={(e: any) => fetchWords(e.currentTarget.value)}
          value={prefix}
        />
        {isLoadingFlag && <button onClick={cancelFetchWords}>Cancel</button>}
      </Box>
      {error && <Text>{error}</Text>}
    </Box>
  )
}

export default WordsSearch
