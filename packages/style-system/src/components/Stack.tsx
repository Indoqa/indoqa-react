import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'
import {BaseTheme} from '../theming/baseTheme'
import {createSpacing} from './base'
import {Flex} from './Flex'
import {AlignItems, JustifyContent, ResponsiveProps, Spacing} from './types'
import {createResponsiveStyles, getValidChildren} from './utils'

export interface StackProps extends ResponsiveProps<FlatStackProps> {
  divider?: JSX.Element
}

interface FlatStackProps {
  stackDirection: StackDirection
  spacing?: Spacing
  alignItems?: AlignItems
  justifyContent?: JustifyContent
}

export enum StackDirection {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
}

function createStackCssStyles(props: FlatStackProps, theme: BaseTheme): IStyle {
  const {stackDirection, alignItems, justifyContent, spacing = 1} = props
  return {
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
export const Stack: React.FC<React.PropsWithChildren<StackProps>> = ({children, divider, ...otherProps}) => {
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

export const VStack: React.FC<React.PropsWithChildren<Omit<StackProps, 'stackDirection'>>> = ({
  children,
  ...otherProps
}) => {
  return (
    <Stack stackDirection={StackDirection.VERTICAL} {...otherProps}>
      {children}
    </Stack>
  )
}

export const HStack: React.FC<React.PropsWithChildren<Omit<StackProps, 'stackDirection'>>> = ({
  children,
  ...otherProps
}) => {
  return (
    <Stack stackDirection={StackDirection.HORIZONTAL} {...otherProps}>
      {children}
    </Stack>
  )
}
