import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'

import {BaseTheme} from '../theming/baseTheme'
import {createBoxCSSStyle} from './Box'
import {BaseProps, FlatBoxProps, FlexBaseProps, FlexContainerProps, HtmlDivAttributesWithoutStyle} from './types'
import {createResponsiveStyles} from './utils'

export type FlexProps<T extends BaseTheme> = FlexBaseProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>

export const createFlexContainerCSSStyle = (props: FlexContainerProps): IStyle => {
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
  } else {
    Object.assign(styles, {flexWrap: 'wrap'})
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

function createFlexCSSStyle<T extends BaseTheme>(
  props: FlatBoxProps<T>,
  theme: BaseTheme,
  outsideMediaQuery: boolean
): IStyle {
  return {
    ...createBoxCSSStyle(props, theme, outsideMediaQuery),
    ...createFlexContainerCSSStyle(props),
  }
}

export function Flex<T extends BaseTheme>(props: FlexProps<T> & {as?: keyof HTMLElementTagNameMap}) {
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
    ...styleProps
  } = props
  const {css, theme} = useFela<BaseTheme>()
  const boxStyles = createResponsiveStyles(styleProps, createFlexCSSStyle, theme)
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

export function HeaderFlex<T extends BaseTheme>(props: FlexProps<T>) {
  return <Flex as="header" {...props} />
}

export function NavFlex<T extends BaseTheme>(props: FlexProps<T>) {
  return <Flex as="nav" {...props} />
}

export function SectionFlex<T extends BaseTheme>(props: FlexProps<T>) {
  return <Flex as="section" {...props} />
}

export function ArticleFlex<T extends BaseTheme>(props: FlexProps<T>) {
  return <Flex as="article" {...props} />
}

export function AsideFlex<T extends BaseTheme>(props: FlexProps<T>) {
  return <Flex as="aside" {...props} />
}

export function FooterFlex<T extends BaseTheme>(props: FlexProps<T>) {
  return <Flex as="footer" {...props} />
}

export function FigCaptionFlex<T extends BaseTheme>(props: FlexProps<T>) {
  return <Flex as="figcaption" {...props} />
}

export function FigureFlex<T extends BaseTheme>(props: FlexProps<T>) {
  return <Flex as="figure" {...props} />
}
