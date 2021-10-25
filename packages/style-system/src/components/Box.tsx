import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'

import {BaseTheme} from '../theming/baseTheme'
import {
  createBoxModelCSSProps,
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
} from './base'
import {BaseProps, BoxBaseProps, FlatBoxProps, HtmlDivAttributesWithoutStyle} from './types'
import {createResponsiveStyles} from './utils'

export type BoxProps<T extends BaseTheme> = BoxBaseProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>

export function createBoxCSSStyle<T extends BaseTheme>(
  props: FlatBoxProps<T>,
  theme: BaseTheme,
  outsideMediaQuery: boolean
): IStyle {
  return {
    ...createBoxModelCSSProps(props),
    ...createMarginCSSProps(props, theme),
    ...createPaddingCSSProps(props, theme),
    ...createFlexChildCSSProps(props, theme, outsideMediaQuery),
    ...createStylingCSSProps(props, theme),
    ...createFontCSSProps(props, theme),
  }
}

export function Box<T extends BaseTheme>(props: BoxProps<T> & {as?: keyof HTMLElementTagNameMap}) {
  const {
    as = 'div',
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
  } = props
  const {css, theme} = useFela<BaseTheme>()
  const boxStyles = createResponsiveStyles(props, createBoxCSSStyle, theme)
  return React.createElement(
    as,
    {
      className: css([boxStyles, style as IStyle]),
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

export function HeaderBox<T extends BaseTheme>(props: BoxProps<T>) {
  return <Box as="header" {...props} />
}

export function NavBox<T extends BaseTheme>(props: BoxProps<T>) {
  return <Box as="nav" {...props} />
}

export function SectionBox<T extends BaseTheme>(props: BoxProps<T>) {
  return <Box as="section" {...props} />
}

export function ArticleBox<T extends BaseTheme>(props: BoxProps<T>) {
  return <Box as="article" {...props} />
}

export function AsideBox<T extends BaseTheme>(props: BoxProps<T>) {
  return <Box as="aside" {...props} />
}

export function FooterBox<T extends BaseTheme>(props: BoxProps<T>) {
  return <Box as="footer" {...props} />
}

export function FigCaptionBox<T extends BaseTheme>(props: BoxProps<T>) {
  return <Box as="figcaption" {...props} />
}

export function FigureBox<T extends BaseTheme>(props: BoxProps<T>) {
  return <Box as="figure" {...props} />
}
