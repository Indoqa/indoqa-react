import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import Buttons from './Buttons.redux'
import Result from './Result.redux'
import {Box} from '@indoqa/style-system'

export default class TimePage extends React.Component<{}> {

  public render() {

    return (
      <MainMenuTemplate title="Time">
        <div />
        <Box>
          <Buttons />
          <Result />
        </Box>
      </MainMenuTemplate>
    )
  }
}
