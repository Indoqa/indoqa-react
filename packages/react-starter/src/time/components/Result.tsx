import {Box, Text} from '@indoqa/style-system'
import * as React from 'react'

import {Result} from '../store/time.types'

interface Props {
  results: Result[]
  error: string,
  isLoading: boolean
}

const createResult = (result: Result) => {
  return (
    <React.Fragment>
      <Box>current time: {result.time}</Box>
      <Box>country: {result.countryName}</Box>
      <Box>timezone: {result.timezoneId}</Box>
    </React.Fragment>
  )
}

const renderResult = (result: Result, i: number) => {
  return (
    <Box key={result.timezoneId}>
      {i > 0 && <hr/>}
      {createResult(result)}
    </Box>
  )
}

export default ({results, error, isLoading}: Props) => {
  if (isLoading) {
    return (
      <Text>
        loading...
      </Text>
    )
  }

  if (error) {
    return (
      <Text>
        ERROR fetching time: {error}
      </Text>
    )
  }

  if (!results || results.length === 0) {
    return (
      <Text>
        Select a location!
      </Text>
    )
  }

  return (
    <Box>
      {results.map(renderResult)}
    </Box>
  )
}
