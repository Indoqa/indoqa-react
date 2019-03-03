import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {BaseTheme, HtmlSpanAttributesWithoutStyle} from '..'
import {
  BoxProps,
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  filterProps,
  FlexProps,
  mergeThemedStyles,
  TextProps,
  WithStyle,
} from './base'

const themedTextStyle: StyleFunction<BaseTheme, TextProps> = (props: TextProps): IStyle => ({
  display: 'inline-block',
  ...createMarginCSSProps(props),
  ...createPaddingCSSProps(props),
  ...createFlexChildCSSProps(props),
  ...createFontCSSProps(props),
})

export function Text<T extends BaseTheme>(props: TextProps & HtmlSpanAttributesWithoutStyle & WithStyle<T>) {
  const {children, style, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps>(themedTextStyle, style)
  return (
    <FelaComponent<T, FlexProps> style={styles} {...rest}>
      {({className}) => (
        <span className={className} {...filterProps(rest)}>
            {children}
          </span>
      )}
    </FelaComponent>
  )
}
