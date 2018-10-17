import {IRenderer} from 'fela'
import {IndoqaFela} from 'indoqa-react-fela'
import * as React from 'react'
import {Provider as Redux} from 'react-redux'
import {Store} from 'redux'

export type Props = {
  store: Store<any>,
  children: React.ReactNode,
  renderer: IRenderer,
}

export class IndoqaApplication extends React.Component<Props> {

  public render() {
    return (
      <Redux store={this.props.store}>
        <IndoqaFela renderer={this.props.renderer}>
          {this.props.children}
        </IndoqaFela>
      </Redux>
    )
  }
}
