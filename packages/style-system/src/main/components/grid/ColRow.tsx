/* tslint:disable */
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'

import {BaseBreakpoints, BaseTheme} from '../..'
import {createPaddingCSSProps, createStylingCSSProps, mergeThemedStyles, PaddingProps, StylingProps, WithStyle} from '../base'
import {GRID_SIZE} from './Col'
import {GridContext, Spacing} from './GridContext'
import {testGridContext} from './testGridContext'
import {addUnitIfNeeded} from './utils'

const calcWidthValue = (size: number, spacing?: Spacing): string => {
  const spacingWithUnit = addUnitIfNeeded(spacing)
  const availableSpace = `(100% - ${spacingWithUnit} * ${(GRID_SIZE as any) - 1})`
  const coveredSpacing = `${spacingWithUnit} * ${size - 1}`
  return `calc(${availableSpace} / ${GRID_SIZE} * ${size} + ${coveredSpacing})`
}

const getEnhancedColStyles = (child: any, size: number, willBreakAfter: boolean, needsMarginTop: boolean, spacing?: Spacing) => {
  return {
    width: calcWidthValue(size, spacing),
    marginTop: needsMarginTop ? spacing : 0,
    marginRight: willBreakAfter ? '0px' : spacing
  }
}

const rewriteCols = (breakpoints: BaseBreakpoints, children: React.ReactNode, spacing?: Spacing) => {
  let currentRowSize = 0
  let rowsCount = 0

  // see https://mxstbr.blog/2017/02/react-children-deepdive/#looping-over-children
  return React.Children.map(children, (child) => {
    const currentChild = child as any
    const size: number = currentChild.props.size
    currentRowSize += size
    const isLastCol = currentRowSize === GRID_SIZE
    const willOverflow = currentRowSize > GRID_SIZE

    if (willOverflow) {
      currentRowSize = size
    }
    const needsMarginTop = willOverflow || rowsCount > 0
    if (isLastCol || willOverflow) {
      rowsCount++
    }
    const enhancedColStyles = getEnhancedColStyles(currentChild, size, isLastCol, needsMarginTop, spacing)
    return React.cloneElement((currentChild), {style: enhancedColStyles})
  })
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
        {rewriteCols(theme.breakpoints, this.props.children, this.props.spacing)}
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
