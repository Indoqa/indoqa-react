import {IConfig} from 'fela'
import enforceLonghands from 'fela-enforce-longhands'
import monolithic from 'fela-monolithic'
import namedKeys from 'fela-plugin-named-keys'
import validator from 'fela-plugin-validator'
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
    enhancers: [sortMediaQueryMobileFirst(), enforceLonghands()],
    devMode: false,
  }

  if (process.env.NODE_ENV === 'development' && !disableDevMode) {
    config.plugins = [...webPreset, createNamedKeys(breakpoints), validator()]
    config.enhancers = [monolithic({prettySelectors: true}), sortMediaQueryMobileFirst(), enforceLonghands()]
    config.devMode = true
  }

  if (selectorPrefix) {
    config.selectorPrefix = selectorPrefix
  }

  if (filterClassName) {
    config.filterClassName = filterClassName
  }

  return config
}
