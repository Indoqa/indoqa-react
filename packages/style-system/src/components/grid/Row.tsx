/* tslint:disable:max-classes-per-file */
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme} from '../../theming/baseTheme'
import {
  createPaddingCSSProps,
  createResponsiveStyles,
  createStylingCSSProps,
  FontProps,
  mergeThemedStyles,
  PaddingProps,
  StylingProps,
  WithBaseTheme,
  WithStyle,
} from '../base'

import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'

interface Props<T extends BaseTheme> extends WithStyle<T>, PaddingProps, StylingProps<T> {
  height?: number | string,
  minHeight?: number | string,
}

interface RowContainerProps<T extends BaseTheme> extends Props<T> {
  spacing?: number | string,
}

interface RowStyle extends IStyle {
  ':first-child': IStyle,
  '@media (min-width: 768px)': IStyle,
}

interface BaseStyleProps<T extends BaseTheme> extends PaddingProps,
  StylingProps<T>,
  FontProps<T>,
  WithBaseTheme {
}

function createBaseStyles<T extends BaseTheme>(props: BaseStyleProps<T>, theme: BaseTheme): IStyle {
  return {
    ...createPaddingCSSProps(props, theme),
    ...createStylingCSSProps(props, theme),
  }
}

class RowContainer<T extends BaseTheme> extends React.Component<RowContainerProps<T>> {

  public render() {
    const rowStyle: StyleFunction<BaseTheme, RowContainerProps<T>> = (
      // tslint:disable-next-line:no-shadowed-variable
      {style, minHeight, spacing, height, ...otherProps}): RowStyle => ({
      ...createResponsiveStyles(otherProps, createBaseStyles),
      boxSizing: 'border-box',
      display: 'flex',
      // wrap all flex items -> since a panel has a mobile width of 100%, each
      // panel visually gets its own row
      flexWrap: 'wrap',
      // let all content items (= panels) claim the full space
      alignItems: 'stretch',
      width: '100%',
      minHeight,
      ':first-child': {
        marginTop: `-${spacing}`,
      },
      '@media (min-width: 768px)': {
        flexWrap: 'nowrap',
        height,
      },
    })
    const {children, style, ...otherProps} = this.props
    const styles = mergeThemedStyles<T, RowContainerProps<T>>(rowStyle, style)
    return (
      <FelaComponent<T> style={styles} {...otherProps}>
        {children}
      </FelaComponent>
    )
  }
}

export class Row<T extends BaseTheme> extends React.Component<Props<T>> {

  public static defaultProps = {
    height: 'auto',
    minHeight: 'auto',
  }

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
