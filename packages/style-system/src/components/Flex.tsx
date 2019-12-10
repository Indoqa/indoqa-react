import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

import {BaseTheme} from '../theming/baseTheme'
import {createBoxCSSStyle} from './Box'
import {BaseProps, BoxProps, FlatBoxProps, FlexContainerProps, FlexProps, HtmlDivAttributesWithoutStyle} from './types'
import {createResponsiveStyles, mergeThemedStyles} from './utils'

export const createFlexContainerCSSStyle = <T extends BaseTheme>(props: FlexContainerProps, theme: T, outsideMediaQuery: boolean): IStyle => {
  const {inline, direction, nowrap, center, justifyContent, alignItems} = props
  const styles: IStyle = {}

  if (inline) {
    Object.assign(styles, {display: 'inline-flex'})
  } else {
    Object.assign(styles, {display: 'flex'})
  }

  if (direction) {
    Object.assign(styles, {flexDirection: direction})
  }

  if (nowrap) {
    Object.assign(styles, {flexWrap: 'nowrap'})
  }

  if (justifyContent) {
    Object.assign(styles, {justifyContent})
  }

  if (alignItems) {
    Object.assign(styles, {alignItems})
  }

  if (center) {
    const centerStyles: IStyle = {
      justifyContent: justifyContent || 'center',
      alignItems: alignItems || 'center',
      textAlign: 'center',
    }
    Object.assign(styles, centerStyles)
  }

  return styles
}

function createFlexCSSStyle<T extends BaseTheme>(props: FlatBoxProps<T>, theme: BaseTheme, outsideMediaQuery: boolean): IStyle {
  return {
    ...createBoxCSSStyle(props, theme, outsideMediaQuery),
    ...createFlexContainerCSSStyle(props, theme, outsideMediaQuery),
  }
}

function themedFlexStyles<T extends BaseTheme>(props: FlexProps<T>): IStyle {
  return {
    ...createResponsiveStyles(props, createFlexCSSStyle),
  }
}

function renderFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>, as: string) {
  const {children, style, onClick, onMouseDown, onMouseOut, onMouseOver, onScroll, htmlAttrs, innerRef, testId, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps<T>>(themedFlexStyles, style)
  return (
    <FelaComponent<T, FlexProps<T>> style={styles} {...rest}>
      {({className}) => React.createElement(as, {
        className,
        'data-testid': testId,
        onClick,
        onMouseDown,
        onMouseOut,
        onMouseOver,
        onScroll,
        ...htmlAttrs,
        ref: innerRef,
      }, children)}
    </FelaComponent>
  )
}

export function Flex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'div')
}

export function HeaderFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'header')
}

export function NavFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'nav')
}

export function SectionFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'section')
}

export function ArticleFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'article')
}

export function AsideFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'aside')
}

export function FooterFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'footer')
}

export function FigCaptionFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'figcaption')
}

export function FigureFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  return renderFlex(props, 'figure')
}
