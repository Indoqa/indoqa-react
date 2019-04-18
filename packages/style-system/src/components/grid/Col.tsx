import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme} from '../../theming/baseTheme'
import {
  createFontCSSProps,
  createPaddingCSSProps,
  createResponsiveStyles,
  createStylingCSSProps,
  FontProps,
  mergeThemedStyles,
  PaddingProps,
  ResponsiveProps,
  StylingProps,
  WithBaseTheme,
  WithStyle,
} from '../base'
import {GridContext} from './GridContext'
import {testGridContext} from './testGridContext'

type SizeValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Size = SizeValue | SizeValue[]

interface Props<T extends BaseTheme> extends WithStyle<T>,
  ResponsiveProps<PaddingProps>,
  ResponsiveProps<StylingProps<T>>,
  ResponsiveProps<FontProps<T>> {
  size?: Size,
}

interface BaseStyleProps<T extends BaseTheme> extends PaddingProps,
  StylingProps<T>,
  FontProps<T>,
  WithBaseTheme {
}

export const GRID_SIZE: Size = 12

function createBaseStyles<T extends BaseTheme>(props: BaseStyleProps<T>, theme: BaseTheme): IStyle {
  return {
    ...createPaddingCSSProps(props, theme),
    ...createFontCSSProps(props, theme),
    ...createStylingCSSProps(props, theme),
  }
}

function themedBoxStyles<T extends BaseTheme>(props: Props<T>): IStyle {
  return {
    ...createResponsiveStyles(props, createBaseStyles),
  }
}

export class Col<T extends BaseTheme> extends React.Component<Props<T>> {

  public static defaultProps = {
    size: GRID_SIZE,
  }

  public render() {
    const {children, style, ...otherProps} = this.props
    const styles = mergeThemedStyles<T, Props<T>>(themedBoxStyles, style)
    return (
      <GridContext.Consumer>
        {({spacing}) => {
          const child = (
            <FelaComponent style={styles} spacing={spacing} {...otherProps}>
              {children}
            </FelaComponent>
          )
          return testGridContext(spacing, child)
        }}
      </GridContext.Consumer>
    )
  }
}
