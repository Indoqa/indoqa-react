import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme} from '../theming/baseTheme'
import {
  BaseProps,
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createResponsiveStyles,
  createStylingCSSProps,
  HtmlSpanAttributesWithoutStyle,
  mergeThemedStyles,
  TextProps,
  WithBaseTheme,
} from './base'


function createTextCSSStyle<T extends BaseTheme>(props: TextProps<T> & WithBaseTheme, theme: BaseTheme): IStyle {
  return {
    display: 'inline-block',
    ...createMarginCSSProps(props, theme),
    ...createPaddingCSSProps(props, theme),
    ...createFlexChildCSSProps(props),
    ...createFontCSSProps(props, theme),
    ...createStylingCSSProps(props, theme),
  }
}


function themedTextStyle<T extends BaseTheme>(props: TextProps<T>): IStyle {
  return {
    ...createResponsiveStyles(props, createTextCSSStyle),
  }
}

export function Text<T extends BaseTheme>(props: TextProps<T> & BaseProps<T, HtmlSpanAttributesWithoutStyle>) {
  const {children, style, htmlAttrs, ...rest} = props
  const styles = mergeThemedStyles<T, TextProps<T>>(themedTextStyle, style)
  return (
    <FelaComponent<T, TextProps<T>> style={styles} {...rest}>
      {({className}) => (
        <span className={className} {...htmlAttrs}>
          {children}
        </span>
      )}
    </FelaComponent>
  )
}
