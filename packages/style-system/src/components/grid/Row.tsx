/* tslint:disable:max-classes-per-file */
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme} from '../../theming/baseTheme'
import {createPaddingCSSProps, createStylingCSSProps} from '../base'
import {FontProps, PaddingProps, StylingProps, WithBaseTheme, WithStyle} from '../types'
import {createResponsiveStyles, mergeThemedStyles} from '../utils'

import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'

interface Props<T extends BaseTheme> extends WithStyle<T>, PaddingProps, StylingProps<T> {
  height?: number | string
  minHeight?: number | string
  testId?: string
  innerRef?: React.RefObject<HTMLDivElement>
}

interface RowContainerProps<T extends BaseTheme> extends Props<T> {
  spacing?: number | string
}

interface BaseStyleProps<T extends BaseTheme> extends PaddingProps, StylingProps<T>, FontProps<T>, WithBaseTheme {}

function createBaseStyles<T extends BaseTheme>(props: BaseStyleProps<T>, theme: BaseTheme): IStyle {
  return {
    ...createPaddingCSSProps(props, theme),
    ...createStylingCSSProps(props, theme),
  }
}

class RowContainer<T extends BaseTheme> extends React.Component<React.PropsWithChildren<RowContainerProps<T>>> {
  public render() {
    const rowStyle: StyleFunction<BaseTheme, RowContainerProps<T>> = (
      // tslint:disable-next-line:no-shadowed-variable
      {style, minHeight, spacing, height, ...otherProps}
    ): IStyle => ({
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
      tablet: {
        flexWrap: 'nowrap',
        height,
      },
    })
    const {children, style, innerRef, testId, ...otherProps} = this.props
    const styles = mergeThemedStyles<T, RowContainerProps<T>>(rowStyle, style)
    return (
      <FelaComponent<T> style={styles} {...otherProps}>
        {({className}) => (
          <div className={className} ref={innerRef} data-testid={testId}>
            {children}
          </div>
        )}
      </FelaComponent>
    )
  }
}

export class Row<T extends BaseTheme> extends React.Component<React.PropsWithChildren<Props<T>>> {
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
