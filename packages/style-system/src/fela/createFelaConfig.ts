import {IConfig} from 'fela'
import monolithic from 'fela-monolithic'
import namedKeys from 'fela-plugin-named-keys'
import webPreset from 'fela-preset-web'
import sortMediaQueryMobileFirst from 'fela-sort-media-query-mobile-first'
import {BaseBreakpoints, baseTheme} from '../theming/baseTheme'
import {toMediaQueryMap} from '../theming/mediaQueryHelper'

function createNamedKeys<B extends BaseBreakpoints>(breakpoints: B | BaseBreakpoints) {
  return namedKeys({
    ...toMediaQueryMap(breakpoints),
    print: '@media print',
  })
}

export function createFelaConfig<B extends BaseBreakpoints>(
  breakpoints: B | BaseBreakpoints = baseTheme.breakpoints,
  filterClassName?: IConfig['filterClassName'],
  selectorPrefix?: string,
  disableDevMode?: boolean
) {
  const config: IConfig = {
    plugins: [...webPreset, createNamedKeys(breakpoints)],
    enhancers: [sortMediaQueryMobileFirst()],
    devMode: false,
  }

  if (selectorPrefix) {
    config.selectorPrefix = selectorPrefix
  }
  if (filterClassName) {
    config.filterClassName = filterClassName
  }

  if (process.env.NODE_ENV === 'development' && !disableDevMode) {
    config.enhancers = [monolithic({prettySelectors: true}), sortMediaQueryMobileFirst()]
    config.devMode = true
  }
  return config
}
