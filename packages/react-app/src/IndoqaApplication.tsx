import {IRenderer} from 'fela'
import {History} from 'history'
import * as React from 'react'
import {RendererProvider} from "react-fela"
import {Provider as Redux} from 'react-redux'
import {Router} from 'react-router'
import {Store} from 'redux'

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
        <RendererProvider renderer={this.props.renderer}>
          <Router history={this.props.history}>
            {this.props.children}
          </Router>
        </RendererProvider>
      </Redux>
    )
  }
}
