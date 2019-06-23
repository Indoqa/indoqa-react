import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

import {BaseTheme} from '../theming/baseTheme'
import {createBoxCSSStyle} from './Box'
import {BaseProps, BoxProps, FlatBoxProps, FlexContainerProps, FlexProps, HtmlDivAttributesWithoutStyle} from './types'
import {createResponsiveStyles, mergeThemedStyles} from './utils'

export const createFlexContainerCSSStyle = (
  {
    inline,
    direction,
    nowrap,
    center,
    justifyContent,
    alignItems,
  }: FlexContainerProps): IStyle => {
  const styles: IStyle = ({
    display: (inline) ? 'inline-flex' : 'flex',
    flexDirection: direction || 'row',
    flexWrap: (nowrap) ? 'nowrap' : 'wrap',
    justifyContent: justifyContent || 'flex-start',
    alignItems: alignItems || 'stretch',
  })
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

function createFlexCSSStyle<T extends BaseTheme>(props: FlatBoxProps<T>, theme: BaseTheme): IStyle {
  return {
    ...createBoxCSSStyle(props, theme),
    ...createFlexContainerCSSStyle(props),
  }
}

function themedFlexStyles<T extends BaseTheme>(props: FlexProps<T>): IStyle {
  return {
    ...createResponsiveStyles(props, createFlexCSSStyle),
  }
}

function renderFlex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>, as: string) {
  const {children, style, htmlAttrs, innerRef, testId, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps<T>>(themedFlexStyles, style)
  return (
    <FelaComponent<T, FlexProps<T>> style={styles} {...rest}>
      {({className}) => React.createElement(as, {className, ...htmlAttrs, 'data-testid': testId, ref: innerRef}, children)}
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
