import {BaseBreakpoints, Breakpoint} from '../theming/baseTheme'
import memoize from 'lodash/memoize'

export interface NamedBreakPoint extends Breakpoint {
  name: string
}

export function sortBreakpoints<T extends BaseBreakpoints>(breakpoints: T): NamedBreakPoint[] {
  const sortBreakpointsFn = (breakpointsToBeSorted: T) =>
    Object.keys(breakpointsToBeSorted)
      .map((key) => Object.assign(breakpoints[key], {name: key}))
      .sort((b1: NamedBreakPoint, b2: NamedBreakPoint) => b1.sort - b2.sort)
  if (process.env.NODE_ENV === 'production') {
    return memoize(() => sortBreakpointsFn(breakpoints))()
  }
  return sortBreakpointsFn(breakpoints)
}
