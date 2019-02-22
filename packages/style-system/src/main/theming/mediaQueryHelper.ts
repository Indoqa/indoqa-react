import {Breakpoint} from './baseTheme'

export const toMinMediaQuery = (breakpoint: Breakpoint): string => {
  return `@media (min-width: ${breakpoint.value})`
}

interface MediaQueryMap {
  [key: string]: string
}

export const toMediaQueryMap = (breakpoints: Breakpoint[]): MediaQueryMap => {
  const mediaQueryMap: MediaQueryMap = {}
  breakpoints.forEach((breakpoint) => {
    Object.assign(mediaQueryMap, {
      [breakpoint.name]: toMinMediaQuery(breakpoint),
    })
  })
  return mediaQueryMap
}
