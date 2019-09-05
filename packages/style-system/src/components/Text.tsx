import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {BaseTheme} from '../theming/baseTheme'
import {createFlexChildCSSProps, createFontCSSProps, createMarginCSSProps, createPaddingCSSProps, createStylingCSSProps} from './base'
import {BaseProps, HtmlSpanAttributesWithoutStyle, TextProps} from './types'
import {createResponsiveStyles, mergeThemedStyles} from './utils'

function createTextCSSStyle<T extends BaseTheme>(props: TextProps<T>, theme: BaseTheme): IStyle {
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
  const {children, style, onClick, onMouseDown, onMouseOut, onMouseOver, onScroll, htmlAttrs, testId, innerRef, ...rest} = props
  const styles = mergeThemedStyles<T, TextProps<T>>(themedTextStyle, style)
  return (
    <FelaComponent<T, TextProps<T>> style={styles} {...rest}>
      {({className}) => React.createElement('span', {
        className,
        'data-testid': testId,
        ...htmlAttrs,
        onClick,
        onMouseDown,
        onMouseOut,
        onMouseOver,
        onScroll,
        ref: innerRef,
      }, children)}
    </FelaComponent>
  )
}
