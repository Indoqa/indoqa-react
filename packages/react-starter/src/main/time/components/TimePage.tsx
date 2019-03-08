import {Box} from '@indoqa/style-system'
import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import CitySelector from './CitySelector.redux'
import Result from './Result.redux'

const TimePage: React.FC = () => (
  <MainMenuTemplate title="Time1">
    <div/>
    <Box>
      <CitySelector/>
      <Result/>
    </Box>
  </MainMenuTemplate>
)

export default TimePage
