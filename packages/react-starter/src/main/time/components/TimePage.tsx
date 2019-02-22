import {Box} from '@indoqa/style-system'
import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import CitySelector from './CitySelector.redux'
import Result from './Result.redux'

export default class TimePage extends React.Component<{}> {

  public render() {

    return (
      <MainMenuTemplate title="Time">
        <div/>
        <Box>
          <CitySelector/>
          <Result/>
        </Box>
      </MainMenuTemplate>
    )
  }
}
