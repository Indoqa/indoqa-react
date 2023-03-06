import {IStyle} from 'fela'
import * as React from 'react'
import {FelaStyle, StyleFunction} from 'react-fela'
import {BaseTheme, CssPropValue, FontStyle} from '../theming/baseTheme'
import {NamedBreakPoint, sortBreakpoints} from '../theming/sortBreakpoints'
import {WithBaseTheme} from './types'

export const THEME_NOT_AVAILABLE_ERR_MSG =
  'There is no theme available or one of its properties is missing. ' +
  'Check if the Fela ThemeProvider is configured correctly.'

export const addUnitIfNeeded = (value: any | string, propertyUnit?: string): string => {
  const valueType = typeof value
  if (valueType === 'number' || (valueType === 'string' && !isNaN(value))) {
    return `${value}${propertyUnit || 'px'}`
  }
  return `${value}`
}

const initializeObjectArray = (length: number) => {
  const a = []
  for (let i = 0; i < length; i++) {
    a.push({})
  }
  return a
}

const validateSizes = (length: number, breakpointCount: number, name: string, value: any) => {
  if (length > breakpointCount + 1) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`The property ${name} contains more values than available breakpoints.`, value)
    }
    return false
  }
  return true
}

export function getPropsByBreakpoint(props: any, breakpoints: NamedBreakPoint[]): any[] {
  const result: any[] = initializeObjectArray(breakpoints.length + 1)

  Object.keys(props).forEach((key) => {
    const value = props[key]
    if (!Array.isArray(value)) {
      result[0][key] = value
    } else {
      validateSizes(value.length, breakpoints.length, key, value)
      for (let i = 0; i <= breakpoints.length; i++) {
        const currentValue = value[i]
        if (currentValue !== undefined) {
          result[i][key] = currentValue
        }
      }
    }
  })

  return result
}

export type ResponsiveStyleFunction<T extends BaseTheme> = (props: any, theme: T, outsideMediaQuery: boolean) => IStyle

export function createResponsiveStyles<T extends BaseTheme>(
  props: any & WithBaseTheme,
  styleFunction: ResponsiveStyleFunction<T>,
  theme?: T
): IStyle {
  const currentTheme = theme || props.theme
  if (!currentTheme) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }

  const sortedBreakpoints = sortBreakpoints(currentTheme.breakpoints)
  const groupedProps = getPropsByBreakpoint(props, sortedBreakpoints)

  // add the mobile styles (no breakpoint name used)
  const styles: IStyle = styleFunction(groupedProps[0], currentTheme, true)

  // add the styles for the breakpoints
  for (let i = 0; i < sortedBreakpoints.length; i++) {
    const breakpointProps = groupedProps[i + 1] // the first array value is for mobile
    if (Object.keys(breakpointProps).length === 0) {
      break
    }
    const breakpointName = sortedBreakpoints[i].name
    Object.assign(styles, {
      [breakpointName]: styleFunction(breakpointProps, currentTheme, false),
    })
  }
  return styles
}

export function mergeThemedStyles<T extends BaseTheme, P>(
  componentStyle: StyleFunction<T, P> | IStyle,
  passedStyle?: FelaStyle<T, P>
): FelaStyle<T, P> {
  if (!passedStyle) {
    return componentStyle
  }

  if (passedStyle instanceof Array) {
    return [componentStyle, ...passedStyle]
  }

  return [componentStyle, passedStyle]
}

export function getValidChildren(children: React.ReactNode) {
  return React.Children.toArray(children).filter((child) => React.isValidElement(child)) as React.ReactElement[]
}

export function getCssFontProps(fontProps: CssPropValue | FontStyle): IStyle {
  if (Array.isArray(fontProps)) {
    return {
      fontSize: fontProps[0],
      ...fontProps[1],
    }
  }
  return {
    fontSize: fontProps,
  }
}
