import css from 'css'

export type BreakpointNames = { [key: string]: string }

export const cssObjectToPStyle = (cssObject: any, classNames: string | null, result: any, breakpointNames: BreakpointNames): void => {
  if (!classNames) {
    return
  }
  const classes = classNames.split(' ')
  Object.keys(cssObject).forEach((key: string) => {
    const value = cssObject[key]
    if (key.startsWith('.')) {
      const className = key.substring(1)
      if (classes.includes(className)) {
        Object.assign(result, value)
      }
    }
    if (key.startsWith('@')) {
      const mediaQueryRules = {}
      cssObjectToPStyle(value, classNames, mediaQueryRules, breakpointNames)
      const breakpointName = breakpointNames[key] || key
      Object.assign(result, {[breakpointName]: mediaQueryRules})
    }
  })
}

export const cssToObject = (cssString: string, opts: any) => {
  const ast = css.parse(cssString)
  if (ast && ast.stylesheet) {
    return transform(opts)(ast.stylesheet.rules)
  }
  throw Error(`The cssString could not be parsed: ${cssString}`)
}

const transform = (opts: any) => (rules: any, result = {}) => {
  rules.forEach((rule: any) => {
    if (rule.type === 'media') {
      const k = '@media ' + rule.media
      result[k] = transform(opts)(rule.rules)
      return
    }

    const [key] = rule.selectors
    if (key.length) {
      Object.assign(result, {
        [key]: getDeclarations(rule.declarations, opts),
      })
    } else {
      Object.assign(result, getDeclarations(rule.declarations, opts))
    }
  })
  return result
}

const getDeclarations = (decs: any, opts: any = {}) => {
  return decs
    .map((d: any) => ({
      key: opts.camelCase ? camel(d.property) : d.property,
      value: opts.numbers ? parsePx(d.value) : d.value,
    }))
    .reduce((a: any, b: any) => {
      a[b.key] = b.value.valueOf()
      return a
    }, {})
}

const camel = (str: string) => {
  if (str.startsWith('-')) {
    return str
  }
  return str
    .replace(/(-[a-z])/g, (x) => x.toUpperCase())
    .replace(/-/g, '')
}

const parsePx = (val: any) => {
  return /px$/.test(val)
    ? parseFloat(val.replace(/px$/, ''))
    : val
}
