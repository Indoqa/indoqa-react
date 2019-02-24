/* tslint:disable */
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'

import {BaseBreakpoints, BaseTheme, Breakpoint, PStyle, Size} from '../..'
import {createPaddingCSSProps, createStylingCSSProps, mergeThemedStyles, PaddingProps, StylingProps, WithStyle} from '../base'
import {GRID_SIZE} from './Col'
import {GridContext, Spacing} from './GridContext'
import {testGridContext} from './testGridContext'
import {addUnitIfNeeded} from './utils'

interface NamedBreakPoint extends Breakpoint {
  name: string,
}

const calcWidthValue = (size: number, spacing?: Spacing): string => {
  const spacingWithUnit = addUnitIfNeeded(spacing)
  const availableSpace = `(100% - ${spacingWithUnit} * ${(GRID_SIZE as any) - 1})`
  const coveredSpacing = `${spacingWithUnit} * ${size - 1}`
  return `calc(${availableSpace} / ${GRID_SIZE} * ${size} + ${coveredSpacing})`
}

const getEnhancedColStyles = (
  child: any,
  breakpointName: string | null,
  size: number,
  willBreakAfter: boolean,
  needsMarginTop: boolean,
  spacing?: Spacing
) => {
  const style = {
    width: calcWidthValue(size, spacing),
    marginTop: needsMarginTop ? spacing : 0,
    marginRight: willBreakAfter ? '0px' : spacing
  }
  return breakpointName === null ? style : {[breakpointName]: style}
}

const toSizeArray = (size: Size) => {
  if (Array.isArray(size)) {
    return size
  }
  return [size] as number[]
}

const initializeArray = (length: number) => {
  const a = []
  for (let i = 0; i < length; i++) {
    a.push(0)
  }
  return a
}

const mergeStyles = (style1: PStyle, style2: PStyle) => {
  if (style2 === null) {
    return style1
  }
  return [style1, style2]
}

const validateSizes = (sizes: number, breakpointCount: number, child: any) => {
  if (sizes > breakpointCount + 1) {
    if (process.env.NODE_ENV === 'production') {
      return true
    }
    console.warn('There are more Col sizes than breakpoints.', child)
    return false
  }
  return true
}

/*
 * Iterate over all children (<Col>) and their sizes and create styles for each col/size combination.
 */
const rewriteCols = (breakpoints: NamedBreakPoint[], children: React.ReactNode, spacing?: Spacing) => {
  let currentRowSize = initializeArray(breakpoints.length)
  let rowsCount = initializeArray(breakpoints.length)

  // see https://mxstbr.blog/2017/02/react-children-deepdive/#looping-over-children
  return React.Children.map(children, (child) => {
    const currentChild = child as any
    const sizes = toSizeArray(currentChild.props.size)
    if (!validateSizes(sizes.length, breakpoints.length, child)) {
      return
    }
    const style = currentChild.props.style

    const enhancedColStyles = {}
    for (let i = 0; i < sizes.length; i++) {
      // the first breakpoint is the mobile breakpoint which must not be explicitly listed in the breakpoints
      const currentBreakpoint = i === 0 ? null : breakpoints[i - 1].name
      currentRowSize[i] += sizes[i]
      const isLastCol = currentRowSize[i] === GRID_SIZE
      const willOverflow = currentRowSize[i] > GRID_SIZE
      if (willOverflow) {
        currentRowSize[i] = sizes[i]
      }
      const needsMarginTop = willOverflow || rowsCount[i] > 0
      if (isLastCol || willOverflow) {
        rowsCount[i]++
      }
      const enhancedColStyle = getEnhancedColStyles(currentChild, currentBreakpoint, sizes[i], isLastCol, needsMarginTop, spacing)
      Object.assign(enhancedColStyles, enhancedColStyle)
    }
    return React.cloneElement((currentChild), {style: mergeStyles(enhancedColStyles, style)})
  })
}

function getSortedBreakpoints<T extends BaseBreakpoints>(breakpoints: T): NamedBreakPoint[] {
  return Object
    .keys(breakpoints)
    .map((key) => Object.assign(breakpoints[key], {name: key}))
    .sort((b1, b2) => b1.sort - b2.sort)
}

interface RowContainerProps<T extends BaseTheme> extends Props<T> {
  spacing?: number | string,
}

interface RowStyle extends IStyle {
  ':first-child': IStyle,
}

class RowContainer<T extends BaseTheme> extends React.Component<RowContainerProps<T>> {

  public render() {
    const rowStyle: StyleFunction<BaseTheme, RowContainerProps<T>> = ({style, spacing, ...otherProps}): RowStyle => ({
      ...createPaddingCSSProps(otherProps),
      ...createStylingCSSProps(otherProps),
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: spacing,
      ':first-child': {
        marginTop: 0,
      },
    })
    const {style, ...otherProps} = this.props
    const styles = mergeThemedStyles<T, RowContainerProps<T>>(rowStyle, style)
    const renderCols = ({className, theme}: RenderProps<T>) => (
      <div className={className}>
        {rewriteCols(getSortedBreakpoints(theme.breakpoints), this.props.children, this.props.spacing)}
      </div>
    )
    return (
      <FelaComponent<T> style={styles} {...otherProps}>
        {renderCols}
      </FelaComponent>
    )
  }
}

interface Props<T extends BaseTheme> extends WithStyle<T>, PaddingProps, StylingProps {
}

export class ColRow<T extends BaseTheme> extends React.Component<Props<T>> {

  public render() {
    return (
      <GridContext.Consumer>
        {({spacing}) => {
          const child = (
            <RowContainer spacing={spacing} {...this.props}>
              {this.props.children}
            </RowContainer>
          )
          return testGridContext(spacing, child)
        }}
      </GridContext.Consumer>
    )
  }
}
