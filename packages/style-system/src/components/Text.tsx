import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'
import {BaseTheme} from '../theming/baseTheme'
import {
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
} from './base'
import {BaseProps, HtmlDivAttributesWithoutStyle, TextBaseProps} from './types'
import {createResponsiveStyles} from './utils'

export type TextProps<T extends BaseTheme> = TextBaseProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>

function createTextCSSStyle<T extends BaseTheme>(
  props: TextBaseProps<T>,
  theme: BaseTheme,
  outsideMediaQuery: boolean
): IStyle {
  return {
    display: 'inline-block',
    ...createMarginCSSProps(props, theme),
    ...createPaddingCSSProps(props, theme),
    ...createFlexChildCSSProps(props, theme, outsideMediaQuery),
    ...createFontCSSProps(props, theme),
    ...createStylingCSSProps(props, theme),
  }
}

export function Text<T extends BaseTheme>(props: TextProps<T>) {
  const {
    style,
    onClick,
    onMouseDown,
    onMouseOut,
    onMouseOver,
    onScroll,
    htmlAttrs,
    testId,
    innerRef,
    children,
    ...styleProps
  } = props
  const {css, theme} = useFela<BaseTheme>()
  const styles = createResponsiveStyles(styleProps, createTextCSSStyle, theme)
  return React.createElement(
    'span',
    {
      className: css([styles, style as IStyle]),
      'data-testid': testId,
      onClick,
      onMouseDown,
      onMouseOut,
      onMouseOver,
      onScroll,
      ...htmlAttrs,
      ref: innerRef,
    },
    children
  )
}
