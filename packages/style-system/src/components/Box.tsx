import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

import {BaseTheme} from '../theming/baseTheme'
import {
  createBoxModelCSSProps,
  createFlexChildCSSProps,
  createFontCSSProps,
  createMarginCSSProps,
  createPaddingCSSProps,
  createStylingCSSProps,
} from './base'
import {BaseProps, BoxProps, FlatBoxProps, HtmlDivAttributesWithoutStyle} from './types'
import {createResponsiveStyles, mergeThemedStyles} from './utils'

export function createBoxCSSStyle<T extends BaseTheme>(props: FlatBoxProps<T>, theme: BaseTheme): IStyle {
  return {
    ...createBoxModelCSSProps(props),
    ...createMarginCSSProps(props, theme),
    ...createPaddingCSSProps(props, theme),
    ...createFlexChildCSSProps(props),
    ...createStylingCSSProps(props, theme),
    ...createFontCSSProps(props, theme),
  }
}

function themedBoxStyles<T extends BaseTheme>(props: BoxProps<T>): IStyle {
  return {
    ...createResponsiveStyles(props, createBoxCSSStyle),
  }
}

function renderBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>, as: string) {
  const {children, style, onClick, onMouseDown, onMouseOut, onMouseOver, onScroll, htmlAttrs, testId, innerRef, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps<T>>(themedBoxStyles, style)
  return (
    <FelaComponent<T, BoxProps<T>> style={styles} {...rest}>
      {({className}) => React.createElement(as, {
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

export function Box<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'div')
}

export function HeaderBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'header')
}

export function NavBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'nav')
}

export function SectionBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'section')
}

export function ArticleBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'article')
}

export function AsideBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'aside')
}

export function FooterBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'footer')
}

export function FigCaptionBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'figcaption')
}

export function FigureBox<T extends BaseTheme>(props: BoxProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderBox(props, 'figure')
}

