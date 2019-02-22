import {BaseBreakpoints, baseTheme, toMediaQueryMap} from '@indoqa/style-system'
import monolithic from 'fela-monolithic'
import extend from 'fela-plugin-extend'
import fallbackValue from 'fela-plugin-fallback-value'
import namedKeys from 'fela-plugin-named-keys'
import prefixer from 'fela-plugin-prefixer'
import unit from 'fela-plugin-unit'

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
      extend(),
      prefixer(),
      fallbackValue(),
      unit(),
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
