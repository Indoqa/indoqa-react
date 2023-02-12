import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'
import {BaseTheme} from '../theming/baseTheme'
import {createSpacing} from './base'
import {createBoxCSSStyle} from './Box'
import {Flex} from './Flex'
import {AlignItems, FlatBoxProps, JustifyContent, ResponsiveProps, Spacing} from './types'
import {createResponsiveStyles, getValidChildren} from './utils'

export interface StackProps<T extends BaseTheme> extends ResponsiveProps<FlatStackProps<T>> {
  divider?: JSX.Element
  children?: React.ReactNode
}

export type VStackProps<T extends BaseTheme> = Omit<StackProps<T>, 'stackDirection'>

export type HStackProps<T extends BaseTheme> = Omit<StackProps<T>, 'stackDirection'>

interface FlatStackProps<T extends BaseTheme> extends FlatBoxProps<T> {
  stackDirection: StackDirection
  spacing?: Spacing
  alignItems?: AlignItems
  justifyContent?: JustifyContent
}

export enum StackDirection {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
}

function createStackCssStyles<T extends BaseTheme>(
  props: FlatStackProps<T>,
  theme: BaseTheme,
  outsideMediaQuery: boolean
): IStyle {
  const {stackDirection, alignItems, justifyContent, spacing = 1} = props
  return {
    ...createBoxCSSStyle(props, theme, outsideMediaQuery),
    flexDirection: stackDirection === StackDirection.VERTICAL ? 'column' : 'row',
    flexWrap: 'nowrap',
    alignItems,
    justifyContent,
    height: justifyContent !== undefined && StackDirection.VERTICAL ? '100%' : undefined,
    width: justifyContent !== undefined && StackDirection.HORIZONTAL ? '100%' : undefined,
    '& > *:not(:first-child)': {
      marginTop: stackDirection === StackDirection.VERTICAL ? createSpacing(theme, spacing) : 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: stackDirection === StackDirection.HORIZONTAL ? createSpacing(theme, spacing) : 0,
    },
  }
}

/**
 * implement the divider
 */
export function Stack<T extends BaseTheme>({children, divider, ...otherProps}: StackProps<T>) {
  const {theme} = useFela<BaseTheme>()
  const style = createResponsiveStyles(otherProps, createStackCssStyles, theme)

  const hasDivider = !!divider
  const validChildren = getValidChildren(children)

  const nextChildren = !hasDivider
    ? children
    : validChildren.map((child, index) => {
        const key = typeof child.key !== 'undefined' ? child.key : index
        const isLast = index + 1 === validChildren.length
        const nextDivider = isLast ? null : React.cloneElement(divider)
        return (
          <React.Fragment key={key}>
            {child}
            {nextDivider}
          </React.Fragment>
        )
      })
  return <Flex style={style}>{nextChildren}</Flex>
}

export function VStack<T extends BaseTheme>({children, ...otherProps}: VStackProps<T>) {
  return (
    <Stack stackDirection={StackDirection.VERTICAL} {...otherProps}>
      {children}
    </Stack>
  )
}

export function HStack<T extends BaseTheme>({children, ...otherProps}: HStackProps<T>) {
  return (
    <Stack stackDirection={StackDirection.HORIZONTAL} {...otherProps}>
      {children}
    </Stack>
  )
}
