// @flow
import {Box} from '@indoqa/style-system'
import React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import WordsResults from '../components/WordsResults.redux'
import WordsSearch from '../components/WordsSearch.redux'

const WordsPage: React.FC = () => (
  <MainMenuTemplate title="Words">
    <Box m={1}>
      <WordsSearch/>
      <WordsResults/>
    </Box>
  </MainMenuTemplate>
)

export default WordsPage
