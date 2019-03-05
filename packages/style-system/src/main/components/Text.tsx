import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme, HtmlSpanAttributesWithoutStyle} from '..'
import {
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
  filterProps,
  mergeThemedStyles,
  TextProps,
  WithStyle,
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

export function Text<T extends BaseTheme>(props: TextProps<T> & HtmlSpanAttributesWithoutStyle & WithStyle<T>) {
  const {children, style, ...rest} = props
  const styles = mergeThemedStyles<T, TextProps<T>>(themedTextStyle, style)
  return (
    <FelaComponent<T, TextProps<T>> style={styles} {...rest}>
      {({className}) => (
        <span className={className} {...filterProps(rest)}>
            {children}
          </span>
      )}
    </FelaComponent>
  )
}
