import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import Uploader from './Uploader'

export default class UploadPage extends React.Component<{}> {

  public render() {
    return (
      <MainMenuTemplate title="Upload">
        <Uploader/>
      </MainMenuTemplate>
    )
  }
}
