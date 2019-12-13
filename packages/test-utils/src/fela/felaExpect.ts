import {BaseTheme, toMinMediaQuery} from '@indoqa/style-system'
import {IRenderer, IStyle} from 'fela'
import {renderToString} from 'fela-tools'

import {BreakpointNames, cssObjectToPStyle, cssToObject} from './cssToObject'
import {renderer} from './renderFelaComponent'

function getCssPropertyValue<T extends BaseTheme>(
  el: HTMLElement | null,
  theme: T,
  property: string,
  breakpointName?: keyof T['breakpoints'],
  debug?: boolean,
) {
  expect(el).not.toBeNull()
  if (el == null) {
    throw Error('The passed HTMLElement is null')
  }

  const style = getHtmlElementStyles(renderer, el, theme)
  if (debug) {
    // tslint:disable-next-line
    console.log('Style', style)
  }

  return breakpointName ? style[breakpointName as string][property] : style[property]
}

export function expectCssPropertyValue<T extends BaseTheme>(
  el: HTMLElement | null,
  theme: T,
  property: keyof IStyle,
  expectedPropertyValue: string | number,
  breakpointName?: keyof T['breakpoints'],
  debug?: boolean,
) {
  const actualPropertyValue = getCssPropertyValue(el, theme, property, breakpointName, debug)
  expect(actualPropertyValue).toBe(expectedPropertyValue)
}

export function expectMissingCssProperty<T extends BaseTheme>(
  el: HTMLElement | null,
  theme: T,
  property: keyof IStyle,
  breakpointName?: keyof T['breakpoints'],
  debug?: boolean,
) {
  const actualPropertyValue = getCssPropertyValue(el, theme, property, breakpointName, debug)
  expect(actualPropertyValue).toBe(undefined)
}

const translateBreakpoints = <T extends BaseTheme>(theme: T): BreakpointNames => {
  const breakpoints = theme.breakpoints
  const result = {}
  Object.keys(breakpoints).forEach((key: string) => {
    {
      result[toMinMediaQuery(breakpoints[key])] = key
    }
  })
  return result
}

export const getHtmlElementStyles = <T extends BaseTheme>(renderer: IRenderer, el: HTMLElement | null, theme: T): any => {
  if (!el) {
    throw fail('The passed element must not be null')
  }
  const cssString = renderToString(renderer)
  const classNames = el.getAttribute('class')
  const cssObject = cssToObject(cssString, {camelCase: true})
  const styles = {}
  cssObjectToPStyle(cssObject, classNames, styles, translateBreakpoints(theme))
  return styles
}
