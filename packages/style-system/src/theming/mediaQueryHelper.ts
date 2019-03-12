import {BaseBreakpoints, Breakpoint} from './baseTheme'

export const toMinMediaQuery = (breakpoint: Breakpoint): string => {
  return `@media (min-width: ${breakpoint.minWidth})`
}

interface MediaQueryMap {
  [key: string]: string
}

export function toMediaQueryMap<B extends BaseBreakpoints>(breakpoints: B): MediaQueryMap {
  const mediaQueryMap: MediaQueryMap = {}
  Object.keys(breakpoints).forEach((key) => {
    Object.assign(mediaQueryMap, {[key]: toMinMediaQuery(breakpoints[key])})
  })
  return mediaQueryMap
}
