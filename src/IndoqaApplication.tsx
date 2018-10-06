import {IRenderer} from 'fela'
import {IndoqaFela} from 'indoqa-react-fela'
import * as React from 'react'
import {Store} from 'redux'
import {Provider as Redux} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {History} from 'history'

export type Props = {
  store: Store<any>,
  history: History,
  children: React.ReactNode,
  renderer: IRenderer,
}

export class IndoqaApplication extends React.Component<Props> {

  public render() {
    return (
      <Redux store={this.props.store}>
        <IndoqaFela renderer={this.props.renderer}>
          <ConnectedRouter history={this.props.history}>
            {this.props.children}
          </ConnectedRouter>
        </IndoqaFela>
      </Redux>
    )
  }
}
