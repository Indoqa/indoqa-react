import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme, HtmlSpanAttributesWithoutStyle} from '..'
import {
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  filterProps,
  mergeThemedStyles,
  TextProps,
  WithStyle,
} from './base'

function themedTextStyle(props: TextProps): IStyle {
  return {
    display: 'inline-block',
    ...createMarginCSSProps(props),
    ...createPaddingCSSProps(props),
    ...createFlexChildCSSProps(props),
    ...createFontCSSProps(props),
  }
}

export function Text<T extends BaseTheme>(props: TextProps & HtmlSpanAttributesWithoutStyle & WithStyle<T>) {
  const {children, style, ...rest} = props
  const styles = mergeThemedStyles<T, TextProps>(themedTextStyle, style)
  return (
    <FelaComponent<T, TextProps> style={styles} {...rest}>
      {({className}) => (
        <span className={className} {...filterProps(rest)}>
            {children}
          </span>
      )}
    </FelaComponent>
  )
}
