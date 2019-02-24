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
  willBreakAfter?: boolean,
  marginTop?: string | number,
  children: React.ReactNode
}

interface RowContainerProps extends Props {
  spacing?: number | string,
}

/*
 * evenly distribute the full width considering the spacing
 */
const calcWidthValue = (size: number, spacing?: Spacing): string => {
  const spacingWithUnit = addUnitIfNeeded(spacing)
  const availableSpace = `(100% - ${spacingWithUnit} * ${(GRID_SIZE as any) - 1})`
  const coveredSpacing = `${spacingWithUnit} * ${size - 1}`
  return `calc(${availableSpace} / ${GRID_SIZE} * ${size} + ${coveredSpacing})`
}

const calcWidth = (size: number, spacing?: Spacing, rowBreak?: boolean): PStyle => {
  const marginRight = rowBreak ? '0px' : spacing
  return ({
    width: calcWidthValue(size, spacing),
    marginRight,
  })
}

/*
 * calc width and marginRight for all breakpoints
 */
const calcWidths = (size: Size, spacing?: Spacing, rowBreak?: boolean): PStyle => {
  if (Array.isArray(size)) {
    return (
      {
        ...calcWidth(size[0], spacing, rowBreak),
        tablet: {
          ...calcWidth(size[1], spacing, rowBreak),
        },
      }
    )
  }
  return calcWidth(size, spacing, rowBreak)
}

export class Col extends React.Component<Props> {

  public static defaultProps = {
    size: GRID_SIZE,
  }

  public render() {
    const internalProps = this.props as ColManipulatedProps
    const {children, willBreakAfter, marginTop, size} = internalProps
    const colStyle: StyleFunction<BaseTheme, RowContainerProps> = ({theme, spacing}): IStyle => {
      return ({
        ...calcWidths(size || GRID_SIZE, spacing, willBreakAfter),
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
