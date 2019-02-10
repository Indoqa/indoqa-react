import * as React from 'react'

export interface Props {
  test: any,
  children: React.ReactNode,
}

export default class Optional extends React.Component<Props> {

  public render() {
    const {test, children} = this.props
    if (!test) {
      return null
    }
    return children
  }
}
