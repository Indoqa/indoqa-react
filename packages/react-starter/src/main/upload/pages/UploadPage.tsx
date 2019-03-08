import * as React from 'react'
import MainMenuTemplate from '../../commons/components/templates/MainMenuTemplate'
import Uploader from '../components/Uploader'

const UploadPage: React.FC = () => (
  <MainMenuTemplate title="Upload">
    <Uploader/>
  </MainMenuTemplate>
)

export default UploadPage
