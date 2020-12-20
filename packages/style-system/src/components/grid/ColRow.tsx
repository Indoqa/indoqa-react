/* tslint:disable:max-classes-per-file */
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {BaseTheme} from '../../theming/baseTheme'
import {PStyle} from '../../theming/PStyle'
import {NamedBreakPoint, sortBreakpoints} from '../../theming/sortBreakpoints'
import {createPaddingCSSProps, createStylingCSSProps} from '../base'
import {PaddingProps, ResponsiveProps, StylingProps, WithBaseTheme, WithStyle} from '../types'
import {addUnitIfNeeded, createResponsiveStyles, mergeThemedStyles} from '../utils'
import {GRID_SIZE, Size} from './Col'
import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'

interface Props<T extends BaseTheme> extends WithStyle<T>,
  ResponsiveProps<PaddingProps>,
  ResponsiveProps<StylingProps<T>> {
  testId?: string,
  innerRef?: React.RefObject<HTMLDivElement>,
}

interface RowContainerProps<T extends BaseTheme> extends Props<T> {
  spacing?: string | number,
}

interface RowStyle extends IStyle {
  '&:first-child': IStyle,
}

interface BaseStyleProps<T extends BaseTheme> extends PaddingProps, StylingProps<T>, WithBaseTheme {
}

const calcWidthValue = (size: number, spacing?: string | number): string => {
  const spacingWithUnit = addUnitIfNeeded(spacing)
  const availableSpace = `(100% - ${spacingWithUnit} * ${(GRID_SIZE as any) - 1})`
  const coveredSpacing = `${spacingWithUnit} * ${size - 1}`
  return `calc(${availableSpace} / ${GRID_SIZE} * ${size} + ${coveredSpacing} - 0.01px)`
}

const getEnhancedColStyles = (
  child: any,
  breakpointName: string | null,
  size: number,
  willBreakAfter: boolean,
  needsMarginTop: boolean,
  spacing?: string | number,
) => {
  const style = {
    width: calcWidthValue(size, spacing),
    marginTop: needsMarginTop ? spacing : 0,
    marginRight: willBreakAfter ? '0px' : spacing,
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
    if (process.env.NODE_ENV !== 'production') {
      console.warn('There are more Col sizes than breakpoints.', child)
    }
    return false
  }
  return true
}

/*
 * Iterate over all children (<Col>) and their sizes and create styles for each col/size combination.
 */
const rewriteCols = (breakpoints: NamedBreakPoint[], children: React.ReactNode, spacing?: string | number) => {
  const currentRowSize = initializeArray(breakpoints.length + 1)
  const rowsCount = initializeArray(breakpoints.length + 1)

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
      const willOverflow = currentRowSize[i] > GRID_SIZE
      if (willOverflow) {
        currentRowSize[i] = sizes[i]
      }
      const completelyFillsRow = currentRowSize[i] === GRID_SIZE
      const needsMarginTop = willOverflow || rowsCount[i] > 0
      if (completelyFillsRow || willOverflow) {
        rowsCount[i]++
      }
      // console.log('sizes[i]', sizes[i])
      // console.log('completelyFillsRow', completelyFillsRow)
      // console.log('willOverflow', willOverflow)
      // console.log('currentRowSize[i]', currentRowSize[i])
      // console.log('-----------------------------------------')
      const enhancedColStyle = getEnhancedColStyles(
        currentChild,
        currentBreakpoint,
        sizes[i],
        completelyFillsRow,
        needsMarginTop,
        spacing,
      )
      Object.assign(enhancedColStyles, enhancedColStyle)
    }
    return React.cloneElement((currentChild), {style: mergeStyles(enhancedColStyles, style)})
  })
}

function createBaseStyles<T extends BaseTheme>(props: BaseStyleProps<T>, theme: BaseTheme): IStyle {
  return {
    ...createPaddingCSSProps(props, theme),
    ...createStylingCSSProps(props, theme),
  }
}

class RowContainer<T extends BaseTheme> extends React.Component<RowContainerProps<T>> {

  public render() {
    // tslint:disable-next-line:no-shadowed-variable
    const rowStyle: StyleFunction<T, RowContainerProps<T>> = ({style, spacing, ...otherProps}): RowStyle => ({
      ...createResponsiveStyles(otherProps, createBaseStyles),
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: spacing,
      '&:first-child': {
        marginTop: 0,
      },
    })
    const {style, testId, innerRef, ...otherProps} = this.props
    const styles = mergeThemedStyles<T, RowContainerProps<T>>(rowStyle, style)
    const renderCols = ({className, theme}: RenderProps<T>) => (
      <div className={className} ref={innerRef} data-testid={testId}>
        {rewriteCols(sortBreakpoints(theme.breakpoints), this.props.children, this.props.spacing)}
      </div>
    )
    return (
      <FelaComponent<T> style={styles} {...otherProps}>
        {renderCols}
      </FelaComponent>
    )
  }
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
