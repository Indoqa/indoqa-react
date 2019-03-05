import {IStyle} from 'fela'
import * as React from 'react'
import {FelaStyle, StyleFunction} from 'react-fela'
import {BaseTheme} from '..'

type Direction = 'column' | 'row'
type AlignItems = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
type Spacing = 0 | 1 | 2 | 3 | 4

export interface BoxProps<T extends BaseTheme> extends MarginProps,
  PaddingProps,
  FlexChildProps,
  FontProps<T>,
  StylingProps<T>,
  BoxModelProps {
}

export interface FlexProps<T extends BaseTheme> extends BoxProps<T>, FlexContainerProps {
}

export interface TextProps<T extends BaseTheme> extends MarginProps,
  PaddingProps,
  FlexChildProps,
  FontProps<T>,
  StylingProps<T> {
}

export interface BoxModelProps {
  inline?: boolean,
  width?: number | string,
  height?: number | string,
  fullWidth?: boolean,
  fullHeight?: boolean,
}

export interface FlexChildProps {
  grow?: number,
  shrink?: number,
  basis?: number | string,
  order?: number,
  align?: AlignItems,
}

export interface FlexContainerProps {
  inline?: boolean,
  direction?: Direction,
  nowrap?: boolean,
  center?: string,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems,
  stretch?: boolean,
}

export interface FontProps<T extends BaseTheme> {
  fontStyle?: keyof T['fontStyles']
  fontSize?: keyof T['fontSizes'],
  color?: string | keyof T['colors'],
  bold?: boolean,
  italic?: boolean,
  ellipsis?: boolean,
}

export interface MarginProps {
  m?: Spacing,
  mt?: Spacing,
  mb?: Spacing,
  ml?: Spacing,
  mr?: Spacing,
  mx?: Spacing,
  my?: Spacing,
}

export declare interface PaddingProps {
  p?: Spacing,
  pt?: Spacing,
  pb?: Spacing,
  pl?: Spacing,
  pr?: Spacing,
  px?: Spacing,
  py?: Spacing,
}

export interface StylingProps<T extends BaseTheme> {
  bg?: string | keyof T['colors'],
}

interface WithBaseTheme {
  theme?: BaseTheme,
}

export interface WithStyle<T extends BaseTheme> {
  style?: FelaStyle<T>,
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type HtmlDivAttributesWithoutStyle = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>
export type HtmlSpanAttributesWithoutStyle = Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'>

const THEME_NOT_AVAILABLE_ERR_MSG = 'There is no theme available or one of its properties is missing. ' +
  'Check if the Fela ThemeProvider is configured correctly.'

export const createBoxModelCSSProps = ({inline, width, height, fullWidth, fullHeight}: BoxModelProps) => ({
  display: (inline) ? 'inline' : 'block',
  width: (fullWidth) ? '100%' : width || 'auto',
  height: (fullHeight) ? '100%' : height || 'auto',
})

export const createFlexChildCSSProps = ({grow, shrink, basis, order, align}: FlexChildProps): IStyle => {
  const styles = {
    flexGrow: grow || 0,
    flexShrink: shrink || 1,
    flexBasis: basis || 'auto',
  }
  if (order) {
    Object.assign(styles, {order})
  }
  if (align) {
    Object.assign(styles, {alignSelf: align})
  }
  return styles
}

function getColor<T extends BaseTheme>(theme: T, color: string = 'transparent'): string {
  if (color in theme.colors) {
    return theme.colors[color]
  }
  return color
}

function getFontSize<T extends BaseTheme>(theme: T, fontSize: string): string {
  if (fontSize in theme.fontSizes) {
    return theme.fontSizes[fontSize]
  }
  return ''
}

function getFontStyle<T extends BaseTheme>(theme: T, fontStyle: string): string {
  if (fontStyle in theme.fontStyles) {
    return theme.fontStyles[fontStyle]
  }
  return ''
}

export function createStylingCSSProps<T extends BaseTheme>({theme, bg}: StylingProps<T> & WithBaseTheme) {
  if (theme === undefined || theme.colors === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  return ({
    backgroundColor: getColor(theme, bg as string),
  })
}

export function createFontCSSProps<T extends BaseTheme>(
  {theme, fontStyle, fontSize, color, bold, italic, ellipsis}: FontProps<T> & WithBaseTheme) {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles: IStyle = {
    fontWeight: (bold) ? 700 : 400,
  }
  if (italic) {
    Object.assign(styles, {fontStyle: 'italic'})
  }
  if (fontStyle) {
    Object.assign(styles, getFontStyle(theme, fontStyle as string))
  }
  if (fontSize) {
    Object.assign(styles, {fontSize: getFontSize(theme, fontSize as string)})
  }
  if (color) {
    Object.assign(styles, {color: getColor(theme, color as string)})
  }
  if (ellipsis) {
    const ellipsisStyles: IStyle = {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }
    Object.assign(styles, ellipsisStyles)
  }
  return styles
}

export const createMarginCSSProps = ({theme, m, mt, mb, ml, mr, mx, my}: MarginProps & WithBaseTheme) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles = {}
  if (m) {
    Object.assign(styles, {margin: spacing(theme, m)})
  }
  if (mx) {
    Object.assign(styles, {marginLeft: spacing(theme, mx)})
    Object.assign(styles, {marginRight: spacing(theme, mx)})
  }
  if (my) {
    Object.assign(styles, {marginTop: spacing(theme, my)})
    Object.assign(styles, {marginBottom: spacing(theme, my)})
  }
  if (mt) {
    Object.assign(styles, {marginTop: spacing(theme, mt)})
  }
  if (mb) {
    Object.assign(styles, {marginBottom: spacing(theme, mb)})
  }
  if (ml) {
    Object.assign(styles, {marginLeft: spacing(theme, ml)})
  }
  if (mr) {
    Object.assign(styles, {marginRight: spacing(theme, mr)})
  }
  return styles
}

export const createPaddingCSSProps = ({theme, p, pt, pb, pl, pr, px, py}: PaddingProps & WithBaseTheme) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  const styles = {}
  if (p) {
    Object.assign(styles, {padding: spacing(theme, p)})
  }
  if (px) {
    Object.assign(styles, {paddingLeft: spacing(theme, px)})
    Object.assign(styles, {paddingRight: spacing(theme, px)})
  }
  if (py) {
    Object.assign(styles, {paddingTop: spacing(theme, py)})
    Object.assign(styles, {paddingBottom: spacing(theme, py)})
  }
  if (pt) {
    Object.assign(styles, {paddingTop: spacing(theme, pt)})
  }
  if (pb) {
    Object.assign(styles, {paddingBottom: spacing(theme, pb)})
  }
  if (pl) {
    Object.assign(styles, {paddingLeft: spacing(theme, pl)})
  }
  if (pr) {
    Object.assign(styles, {paddingRight: spacing(theme, pr)})
  }
  return styles
}

const knownProps = [
  'inline', 'width', 'height', 'fullWidth', 'fullHeight',
  'grow', 'shrink', 'basis', 'order', 'align',
  'direction', 'nowrap', 'center', 'justifyContent', 'alignItems', 'stretch',
  'fontStyle', 'fontSize', 'color', 'bold', 'italic', 'ellipsis',
  'm', 'mt', 'mb', 'ml', 'mr', 'mx', 'my',
  'p', 'pt', 'pb', 'pl', 'pr', 'px', 'py',
  'bg',
  'theme',
]

const isUnknownProps = (prop: string) => {
  for (const eachKnownProps of knownProps) {
    if (eachKnownProps === prop) {
      return false
    }
  }
  return true
}

export function filterProps<T>(props: any): any {
  return Object
    .keys(props)
    .filter(isUnknownProps)
    .reduce((obj, key) => {
      obj[key] = props[key]
      return obj
    }, {})
}

export function mergeThemedStyles<T extends BaseTheme, P>(
  componentStyle: StyleFunction<T, P> | IStyle, passedStyle?: FelaStyle<T, P>): FelaStyle<T, P> {

  if (!passedStyle) {
    return componentStyle
  }

  if (passedStyle instanceof Array) {
    return [componentStyle, ...passedStyle]
  }

  return [componentStyle, passedStyle]
}

const spacing = (theme: BaseTheme, propValue: Spacing) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }

  switch (propValue) {
    case 1:
      return theme.spacing.space1
    case 2:
      return theme.spacing.space2
    case 3:
      return theme.spacing.space3
    case 4:
      return theme.spacing.space4
    default:
      return theme.spacing.space0
  }
}
