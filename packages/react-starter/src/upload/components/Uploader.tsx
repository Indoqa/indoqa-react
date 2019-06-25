import {Box} from '@indoqa/style-system'
import * as React from 'react'

interface State {
  filename: string | null,
  size: number | null,
  type: string | null,
  data_uri: string | null,
}

const INITIAL_STATE: State = {
  filename: null,
  size: null,
  type: null,
  data_uri: null,
}

export default class Uploader extends React.Component<{}, State> {

  private static handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  private inputRef = React.createRef<HTMLInputElement>()

  constructor(props: {}) {
    super(props)
    this.state = INITIAL_STATE
    this.handleChange = this.handleChange.bind(this)
    this.reset = this.reset.bind(this)
    this.renderFileInfo = this.renderFileInfo.bind(this)
  }

  public render() {
    return (
      <Box>
        <form encType="multipart-formdata" onSubmit={Uploader.handleSubmit}>
          <input type="file" onChange={this.handleChange} ref={this.inputRef}/>
        </form>
        <br/>
        {this.renderFileInfo()}
      </Box>
    )
  }

  private renderFileInfo() {
    if (!this.state.filename) {
      return null
    }
    return (
      <section>
        <p>Name: {this.state.filename}</p>
        <p>Size: {this.state.size}</p>
        <p>Mime-type: {this.state.type}</p>
        <Box pt={1} pb={1}>
          <img src={this.state.data_uri!} width="200" alt="Uploaded file"/>
        </Box>
        <button onClick={() => this.reset()}>Reset</button>
        <br/>
      </section>
    )
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return
    }
    const file: File = e.target.files[0]
    this.setState({filename: file.name})
    this.setState({size: file.size})
    this.setState({type: file.type})

    const reader = new FileReader()
    reader.onload = (upload: ProgressEvent & { target: { result: string } }) => {
      this.setState({data_uri: upload.target.result})
    }
    reader.readAsDataURL(file)
  }

  private reset() {
    this.setState(INITIAL_STATE)
    if (this.inputRef.current) {
      this.inputRef.current.value! = ''
    }
  }
}
