import monolithic from 'fela-monolithic'
import namedKeys from 'fela-plugin-named-keys'
import webPreset from 'fela-preset-web'
import {BaseBreakpoints, baseTheme} from '../theming/baseTheme'
import {toMediaQueryMap} from '../theming/mediaQueryHelper'

function createNamedKeys<B extends BaseBreakpoints>(breakpoints: B | BaseBreakpoints) {
  return namedKeys({
      ...toMediaQueryMap(breakpoints),
      print: '@media print',
    },
  )
}

export function createFelaConfig<B extends BaseBreakpoints>(breakpoints: B | BaseBreakpoints = baseTheme.breakpoints) {
  const config: any = {
    plugins: [
      ...webPreset,
      createNamedKeys(breakpoints),
    ],
    enhancers: [],
  }
  if (process.env.NODE_ENV !== 'production') {
    config.enhancers = [monolithic({prettySelectors: true})]
    config.debug = true
  }
  return config
}