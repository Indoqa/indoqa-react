import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme, WithStyle} from '../..'
import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'

type SizeValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type Size = SizeValue | SizeValue[]

interface Props<T extends BaseTheme> extends WithStyle<T> {
  size?: Size,
}

export const GRID_SIZE: Size = 12
const EMPTY_STYLE: IStyle = {}

export class Col<T extends BaseTheme> extends React.Component<Props<T>> {

  public static defaultProps = {
    size: GRID_SIZE,
  }

  public render() {
    const {children, style} = this.props
    return (
      <GridContext.Consumer>
        {({spacing}) => {
          const child = (
            <FelaComponent style={style || EMPTY_STYLE} spacing={spacing}>
              {children}
            </FelaComponent>
          )
          return testGridContext(spacing, child)
        }}
      </GridContext.Consumer>
    )
  }
}
