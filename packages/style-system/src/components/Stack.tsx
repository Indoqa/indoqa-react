import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'
import {BaseTheme} from '../theming/baseTheme'
import {createSpacing} from './base'
import {Flex} from './Flex'
import {ResponsiveProps, Spacing} from './types'
import {createResponsiveStyles} from './utils'

export interface StackProps extends ResponsiveProps<FlatStackProps> {
  divider?: JSX.Element
}

interface FlatStackProps {
  stackDirection: StackDirection
  spacing?: Spacing
}

export enum StackDirection {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
}

function createStackCssStyles(props: FlatStackProps, theme: BaseTheme): IStyle {
  const {stackDirection, spacing = 1} = props
  return {
    flexDirection: stackDirection === StackDirection.VERTICAL ? 'column' : 'row',
    flexWrap: 'nowrap',
    '& > *:not(:first-child)': {
      marginTop: stackDirection === StackDirection.VERTICAL ? createSpacing(theme, spacing) : 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: stackDirection === StackDirection.HORIZONTAL ? createSpacing(theme, spacing) : 0,
    },
  }
}

function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) => React.isValidElement(child)) as React.ReactElement[]
}

/**
 * implement the divider
 */
export const Stack: React.FC<StackProps> = ({children, divider, ...otherProps}) => {
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

export const VStack: React.FC<Omit<StackProps, 'stackDirection'>> = ({children, ...otherProps}) => {
  return (
    <Stack stackDirection={StackDirection.VERTICAL} {...otherProps}>
      {children}
    </Stack>
  )
}

export const HStack: React.FC<Omit<StackProps, 'stackDirection'>> = ({children, ...otherProps}) => {
  return (
    <Stack stackDirection={StackDirection.HORIZONTAL} {...otherProps}>
      {children}
    </Stack>
  )
}
