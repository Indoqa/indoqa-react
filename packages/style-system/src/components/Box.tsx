import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

import {BaseTheme} from '../theming/baseTheme'
import {
  BaseProps,
  BoxProps,
  createBoxModelCSSProps,
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createResponsiveStyles,
  createStylingCSSProps,
  FlatBoxProps,
  HtmlDivAttributesWithoutStyle,
  mergeThemedStyles,
  WithBaseTheme,
} from './base'


export function createBoxCSSStyle<T extends BaseTheme>(props: FlatBoxProps<T> & WithBaseTheme, theme: BaseTheme): IStyle {
  return {
    ...createBoxModelCSSProps(props),
    ...createMarginCSSProps(props, theme),
    ...createPaddingCSSProps(props, theme),
    ...createFlexChildCSSProps(props),
    ...createStylingCSSProps(props, theme),
    ...createFontCSSProps(props, theme),
  }
}

function themedBoxStyles<T extends BaseTheme>(props: BoxProps<T>): IStyle {
  return {
    ...createResponsiveStyles(props, createBoxCSSStyle),
  }
}

export function Box<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  const {children, style, htmlAttrs, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps<T>>(themedBoxStyles, style)
  return (
    <FelaComponent<T, BoxProps<T>> style={styles} {...rest}>
      {({className}) => (
        <div className={className} {...htmlAttrs}>
          {children}
        </div>
      )}
    </FelaComponent>
  )
}

