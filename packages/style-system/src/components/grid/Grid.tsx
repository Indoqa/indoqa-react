import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme} from '../../theming/baseTheme'
import {createBoxModelCSSProps, createMarginCSSProps, createPaddingCSSProps, createStylingCSSProps} from '../base'
import {
  BoxModelProps,
  MarginProps,
  PaddingProps,
  ResponsiveProps,
  StylingProps,
  WithBaseTheme,
  WithStyle,
} from '../types'
import {createResponsiveStyles, mergeThemedStyles} from '../utils'

import {GridContext} from './GridContext'

interface GridContainerStyleProps<T extends BaseTheme>
  extends WithStyle<T>,
    ResponsiveProps<PaddingProps>,
    StylingProps<T>,
    ResponsiveProps<BoxModelProps>,
    ResponsiveProps<MarginProps> {
  maxWidth?: number | string
  center?: boolean
  testId?: string
  innerRef?: React.RefObject<HTMLDivElement>
}

interface Props<T extends BaseTheme> extends GridContainerStyleProps<T> {
  spacing: string | number
}

interface BaseStyleProps<T extends BaseTheme>
  extends PaddingProps,
    StylingProps<T>,
    BoxModelProps,
    MarginProps,
    WithBaseTheme {}

function createBaseStyles<T extends BaseTheme>(
  props: BaseStyleProps<T>,
  theme: BaseTheme,
  outsideMediaQuery: boolean
): IStyle {
  return {
    ...createBoxModelCSSProps(props),
    ...createMarginCSSProps(props, theme),
    ...createPaddingCSSProps(props, theme),
    ...createStylingCSSProps(props, theme),
  }
}

class GridContainer<T extends BaseTheme> extends React.Component<React.PropsWithChildren<GridContainerStyleProps<T>>> {
  public render() {
    // tslint:disable-next-line:no-shadowed-variable
    const gridStyle: StyleFunction<BaseTheme, GridContainerStyleProps<T>> = ({
      maxWidth,
      center,
      ...otherProps
    }): IStyle => ({
      margin: center ? 'auto' : 0,
      ...createResponsiveStyles(otherProps, createBaseStyles),
      boxSizing: 'border-box',
      maxWidth,
    })
    const {children, style, center, innerRef, testId, ...otherProps} = this.props
    if (process.env.NODE_ENV !== 'production') {
      if (center && (otherProps.mx || otherProps.ml || otherProps.mr)) {
        console.warn(
          'The Grid property center is set to true and one of the properties mx, ml or mr is set. ' +
            'This might lead to unexpected behaviour.'
        )
      }
    }
    const styles = mergeThemedStyles<T, GridContainerStyleProps<T>>(gridStyle, style)
    return (
      <FelaComponent<T, GridContainerStyleProps<T>> style={styles} center={center} data-testid={testId} {...otherProps}>
        {({className}) => (
          <div className={className} ref={innerRef} data-testid={testId}>
            {children}
          </div>
        )}
      </FelaComponent>
    )
  }
}

/**
 * Use this grid component for layouts that place multiple components (further called panels) in the same
 * row and you want to distribute the full width amongst them. This implementation is based on the flexbox
 * grow property. The default panel size is 1 which translates to 'flex-grow: 1 0 0%'.
 *
 * The mobile rendering breaks after each panel.
 *
 * The spacing between the rows and panels can be configured by setting the 'spacing' property.
 * Additionally the maxWidth and the center properties so that these simple use cases there is no need
 * for a wrapper component.
 *
 * Complex layouts can be achieved by using Grid components instead of panels.
 *
 * You should only use row components as children of the Grid, and Panel components as children of Row
 * components.
 */
export class Grid<T extends BaseTheme> extends React.Component<React.PropsWithChildren<Props<T>>> {
  public static defaultProps = {
    maxWidth: 'none',
    center: false,
    spacing: 0,
  }

  public render() {
    const {spacing, ...otherProps} = this.props
    return (
      <>
        <GridContainer {...otherProps}>
          <GridContext.Provider value={{spacing}}>{this.props.children}</GridContext.Provider>
        </GridContainer>
      </>
    )
  }
}
