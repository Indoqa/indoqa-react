import {BaseTheme} from '@indoqa/style-system'
import * as React from 'react'
import {MouseEventHandler, ReactNode, UIEventHandler} from 'react'
import {FelaStyle} from 'react-fela'

export type ResponsiveProps<T> = {
  [P in keyof T]: T[P] | Array<T[P]>
}

export interface FlatBoxProps<T extends BaseTheme> extends MarginProps,
  PaddingProps,
  FlexChildProps,
  FontProps<T>,
  StylingProps<T>,
  BoxModelProps {
}

export interface BoxProps<T extends BaseTheme> extends ResponsiveProps<MarginProps>,
  ResponsiveProps<PaddingProps>,
  ResponsiveProps<FlexChildProps>,
  ResponsiveProps<FontProps<T>>,
  StylingProps<T>,
  ResponsiveProps<BoxModelProps> {
  innerRef?: React.RefObject<HTMLDivElement>,
}

export interface FlexProps<T extends BaseTheme> extends BoxProps<T>, ResponsiveProps<FlexContainerProps> {
}

export interface TextProps<T extends BaseTheme> extends MarginProps,
  PaddingProps,
  FlexChildProps,
  FontProps<T>,
  StylingProps<T> {
  innerRef?: React.RefObject<HTMLSpanElement>,
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
  center?: boolean,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems,
}

export interface FontProps<T extends BaseTheme> {
  fontStyle?: keyof T['fontStyles']
  fontSize?: keyof T['fontSizes'],
  color?: string | keyof T['colors'],
  bold?: boolean,
  italic?: boolean,
  ellipsis?: boolean,
  textAlign?: TextAlign,
  underline?: boolean,
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
  cursorPointer?: boolean,
  overflowHidden?: boolean,
  elevation?: Elevation
}

export interface WithBaseTheme {
  theme?: BaseTheme,
}

export interface WithStyle<T extends BaseTheme> {
  style?: FelaStyle<T>,
}

export interface BaseProps<T extends BaseTheme, H> extends WithStyle<T> {
  children?: ReactNode,
  onClick?: MouseEventHandler<H>,
  onMouseDown?: MouseEventHandler<T>,
  onMouseOver?: MouseEventHandler<T>,
  onMouseOut?: MouseEventHandler<T>,
  onScroll?: UIEventHandler<T>
  htmlAttrs?: H,
  testId?: string,
}

type Direction = 'column' | 'column-reverse' | 'row-reverse' | 'initial' | 'inherit'
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'initial' | 'inherit'
type JustifyContent = 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
type Spacing = 0 | 1 | 2 | 3 | 4
type Elevation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit'
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type HtmlDivAttributesWithoutStyle = Omit<React.HTMLAttributes<HTMLDivElement>, 'style'>
export type HtmlSpanAttributesWithoutStyle = Omit<React.HTMLAttributes<HTMLSpanElement>, 'style'>
