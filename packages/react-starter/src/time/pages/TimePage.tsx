import {Box} from '@indoqa/style-system'
import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import CitySelector from '../components/CitySelector.redux'
import Result from '../components/Result.redux'

const TimePage: React.FC = () => (
  <MainMenuTemplate title="Time">
    <Box>
      <CitySelector/>
      <Result/>
    </Box>
  </MainMenuTemplate>
)

export default TimePage
