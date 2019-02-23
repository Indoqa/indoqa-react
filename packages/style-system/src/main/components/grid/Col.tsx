import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme, PStyle, Spacing} from '../..'
import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'
import {addUnitIfNeeded} from './utils'

type SizeValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type Size = SizeValue | SizeValue[]

export const GRID_SIZE: Size = 12

interface Props {
  size?: Size,
}

interface ColManipulatedProps extends Props {
  rowBreak?: boolean,
  marginTop?: string | number,
  children: React.ReactNode
}

interface RowContainerProps extends Props {
  spacing?: number | string,
}

/*
 * evenly distribute the full width considering the spacing
 */
const calcWidth = (size: number, spacing?: Spacing): string => {
  const spacingWithUnit = addUnitIfNeeded(spacing)
  const availableSpace = `(100% - ${spacingWithUnit} * ${(GRID_SIZE as any) - 1})`
  const coveredSpacing = `${spacingWithUnit} * ${size - 1}`
  return `calc(${availableSpace} / ${GRID_SIZE} * ${size} + ${coveredSpacing})`
}

/*
 * calc width for all breakpoints
 */
const calcWidths = (theme: BaseTheme, size: Size, spacing?: Spacing, rowBreak?: boolean): PStyle => {
  const marginRight = rowBreak ? '0px' : spacing
  return {
    width: calcWidth(size as number, spacing),
    marginRight,
  }
}

export class Col extends React.Component<Props> {

  public static defaultProps = {
    size: GRID_SIZE,
  }

  public render() {
    const internalProps = this.props as ColManipulatedProps
    const {children, rowBreak, marginTop, size} = internalProps
    const colStyle: StyleFunction<BaseTheme, RowContainerProps> = ({theme, spacing}): IStyle => {
      return ({
        ...calcWidths(theme, size || GRID_SIZE, spacing, rowBreak),
        marginTop,
      })
    }
    return (
      <GridContext.Consumer>
        {({spacing}) => {
          const child = (
            <FelaComponent style={colStyle} spacing={spacing}>
              {children}
            </FelaComponent>
          )
          return testGridContext(spacing, child)
        }}
      </GridContext.Consumer>
    )
  }
}
