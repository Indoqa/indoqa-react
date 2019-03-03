import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'

import {BaseTheme, HtmlSpanAttributesWithoutStyle} from '..'
import {
  BoxProps,
  createBoxModelCSSProps,
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
  filterProps,
  mergeThemedStyles,
  WithStyle,
} from './base'

export const createBoxCSSStyles = (props: BoxProps): IStyle => ({
  ...createBoxModelCSSProps(props),
  ...createMarginCSSProps(props),
  ...createPaddingCSSProps(props),
  ...createFlexChildCSSProps(props),
  ...createStylingCSSProps(props),
  ...createFontCSSProps(props),
})

const themedBoxStyles: StyleFunction<BaseTheme, BoxProps> = (props: BoxProps): IStyle => ({
  ...createBoxCSSStyles(props),
})

export function Box<T extends BaseTheme>(props: BoxProps & HtmlSpanAttributesWithoutStyle & WithStyle<T>) {
  const {children, style, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps>(themedBoxStyles, style)
  return (
    <FelaComponent<T, BoxProps> style={styles} {...rest}>
      {({className}) => (
        <div className={className} {...filterProps(rest)}>
          {children}
        </div>
      )}
    </FelaComponent>
  )
}

