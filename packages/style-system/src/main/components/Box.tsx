import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

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

export function createBoxCSSStyles<T extends BaseTheme>(props: BoxProps<T>): IStyle {
  return {
    ...createBoxModelCSSProps(props),
    ...createMarginCSSProps(props),
    ...createPaddingCSSProps(props),
    ...createFlexChildCSSProps(props),
    ...createStylingCSSProps(props),
    ...createFontCSSProps(props),
  }
}

function themedBoxStyles<T extends BaseTheme>(props: BoxProps<T>): IStyle {
  return {
    ...createBoxCSSStyles(props),
  }
}

export function Box<T extends BaseTheme>(props: BoxProps<T> & HtmlSpanAttributesWithoutStyle & WithStyle<T>) {
  const {children, style, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps<T>>(themedBoxStyles, style)
  return (
    <FelaComponent<T, BoxProps<T>> style={styles} {...rest}>
      {({className}) => (
        <div className={className} {...filterProps(rest)}>
          {children}
        </div>
      )}
    </FelaComponent>
  )
}

