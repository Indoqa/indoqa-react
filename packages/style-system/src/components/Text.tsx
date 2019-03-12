import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseProps, BaseTheme, HtmlSpanAttributesWithoutStyle} from '..'
import {
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
  mergeThemedStyles,
  TextProps,
} from './base'

function themedTextStyle<T extends BaseTheme>(props: TextProps<T>): IStyle {
  return {
    display: 'inline-block',
    ...createMarginCSSProps(props),
    ...createPaddingCSSProps(props),
    ...createFlexChildCSSProps(props),
    ...createFontCSSProps(props),
    ...createStylingCSSProps(props),
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
