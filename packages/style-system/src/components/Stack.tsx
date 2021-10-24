import {IStyle} from 'fela'
import * as React from 'react'
import {useFela} from 'react-fela'
import {BaseTheme} from '../theming/baseTheme'
import {createSpacing} from './base'
import {Flex} from './Flex'
import {ResponsiveProps, Spacing} from './types'
import {createResponsiveStyles} from './utils'

export interface StackProps extends ResponsiveProps<FlatStackProps> {
  divider?: JSX.Element | string
}

interface FlatStackProps {
  stackDirection: StackDirection
  spacing: Spacing
}

export enum StackDirection {
  VERTICAL = 'VERTICAL',
  HORIZONTAL = 'HORIZONTAL',
}

function createStackCssStyles(props: FlatStackProps, theme: BaseTheme): IStyle {
  const {stackDirection, spacing} = props
  return {
    flexDirection: stackDirection === StackDirection.VERTICAL ? 'column' : 'row',
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
export const Stack: React.FC<StackProps> = ({children, ...otherProps}) => {
  const {theme} = useFela<BaseTheme>()
  const style = createResponsiveStyles(otherProps, createStackCssStyles, theme)
  return <Flex style={style}>{children}</Flex>
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
