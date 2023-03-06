import {IStyle} from 'fela'

export type CssPropValue = number | string

export interface CssFontProps {
  lineHeight?: CssPropValue
  letterSpacing?: CssPropValue
  fontWeight?: CssPropValue
}

export type FontStyle = [CssPropValue, CssFontProps]

export interface BaseFontSizes {
  readonly verySmall: CssPropValue | FontStyle
  readonly small: CssPropValue | FontStyle
  readonly text: CssPropValue | FontStyle
  readonly big: CssPropValue | FontStyle
  readonly veryBig: CssPropValue | FontStyle
  readonly xs: CssPropValue | FontStyle
  readonly sm: CssPropValue | FontStyle
  readonly base: CssPropValue | FontStyle
  readonly lg: CssPropValue | FontStyle
  readonly xl: CssPropValue | FontStyle
  readonly '2xl': CssPropValue | FontStyle
  readonly '3xl': CssPropValue | FontStyle
  readonly '4xl': CssPropValue | FontStyle
  readonly '5xl': CssPropValue | FontStyle
  readonly '6xl': CssPropValue | FontStyle
  readonly '7xl': CssPropValue | FontStyle
  readonly '8xl': CssPropValue | FontStyle
  readonly '9xl': CssPropValue | FontStyle
}

export interface BaseFontStyles {
  readonly base: IStyle
  readonly alt: IStyle
  readonly mono: IStyle
}

export interface BaseColors {
  readonly text: string
}

export interface BaseSpacing {
  readonly space0: CssPropValue
  readonly space0_5: CssPropValue
  readonly space1: CssPropValue
  readonly space1_5: CssPropValue
  readonly space2: CssPropValue
  readonly space2_5: CssPropValue
  readonly space3: CssPropValue
  readonly space3_5: CssPropValue
  readonly space4: CssPropValue
  readonly space5: CssPropValue
  readonly space6: CssPropValue
  readonly space7: CssPropValue
  readonly space8: CssPropValue
  readonly space9: CssPropValue
  readonly space10: CssPropValue
  readonly space11: CssPropValue
  readonly space12: CssPropValue
  readonly space14: CssPropValue
  readonly space16: CssPropValue
  readonly space20: CssPropValue
  readonly space24: CssPropValue
  readonly space28: CssPropValue
  readonly space32: CssPropValue
  readonly space36: CssPropValue
  readonly space40: CssPropValue
  readonly space44: CssPropValue
  readonly space48: CssPropValue
  readonly space52: CssPropValue
  readonly space56: CssPropValue
  readonly space60: CssPropValue
  readonly space64: CssPropValue
  readonly space72: CssPropValue
  readonly space80: CssPropValue
  readonly space96: CssPropValue
}

export interface BaseZIndexes {
  default: number
  absolute: number
}

export interface Breakpoint {
  minWidth: string
  sort: number
}

export interface BaseBreakpoints {
  tablet: Breakpoint
  desktop: Breakpoint
  largeDesktop: Breakpoint
}

export interface BaseShadows {
  elevation0: string
  elevation1: string
  elevation2: string
  elevation3: string
  elevation4: string
  elevation5: string
}

export interface BaseTheme {
  readonly fontSizes: BaseFontSizes
  readonly fontStyles: BaseFontStyles
  readonly colors: BaseColors
  readonly spacing: BaseSpacing
  readonly zIndexes: BaseZIndexes
  readonly breakpoints: BaseBreakpoints
  readonly shadows: BaseShadows
}

const typeScaleFactor = 1.333
const typeScaleBase = 14
export const typeScale = (level: number) => typeScaleBase + typeScaleFactor * level

export interface Shadow {
  offsetX: number
  offsetY: number
  blur: number
  spread: number
  color: string
}

const createShadowValue = (shadow: Shadow) => {
  return `${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blur}px ${shadow.spread}px ${shadow.color}`
}
export const createBoxShadow = (shadow1: Shadow, shadow2: Shadow, shadow3: Shadow) => {
  return `${createShadowValue(shadow1)},${createShadowValue(shadow2)},${createShadowValue(shadow3)}`
}
const createShadow = (offsetX: number, offsetY: number, blur: number, spread: number, color: string): Shadow => ({
  offsetX,
  offsetY,
  blur,
  spread,
  color,
})
const createElevationShadow1 = (offsetY: number, blur: number, spread: number): Shadow =>
  createShadow(0, offsetY, blur, spread, 'rgba(0,0,0,0.2)')
const createElevationShadow2 = (offsetY: number, blur: number, spread: number): Shadow =>
  createShadow(0, offsetY, blur, spread, 'rgba(0,0,0,0.14)')
const createElevationShadow3 = (offsetY: number, blur: number, spread: number): Shadow =>
  createShadow(0, offsetY, blur, spread, 'rgba(0,0,0,0.12)')

export const systemFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, ' +
  'sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
export const monoSystemFonts = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

export const breakpoints: BaseBreakpoints = {
  tablet: {minWidth: '768px', sort: 1},
  desktop: {minWidth: '992px', sort: 2},
  largeDesktop: {minWidth: '1400px', sort: 3},
}

export const baseTheme: BaseTheme = {
  fontSizes: {
    text: typeScale(0),
    big: typeScale(1),
    veryBig: typeScale(2),
    small: typeScale(-1),
    verySmall: typeScale(-2),

    // see https://tailwindcss.com/docs/font-size#setting-the-font-size
    xs: ['0.75rem', {lineHeight: '1rem'}],
    sm: ['0.875rem', {lineHeight: '1.25'}],
    base: [16, {lineHeight: '1.5rem'}],
    lg: ['1.125rem', {lineHeight: '1.75rem'}],
    xl: ['1.25rem', {lineHeight: '1.75rem'}],
    '2xl': ['1.5rem', {lineHeight: '2rem'}],
    '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
    '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
    '5xl': ['3rem', {lineHeight: 1}],
    '6xl': ['3.75rem', {lineHeight: 1}],
    '7xl': ['4.5rem', {lineHeight: 1}],
    '8xl': ['6rem', {lineHeight: 1}],
    '9xl': ['8rem', {lineHeight: 1}],
  },
  fontStyles: {
    base: {
      fontFamily: systemFonts,
      lineHeight: 1.3,
      fontWeight: 400,
    },
    alt: {
      fontFamily: systemFonts,
      lineHeight: 1.3,
      fontWeight: 700,
    },
    mono: {
      fontFamily: monoSystemFonts,
      color: '#000000',
    },
  },
  colors: {
    text: '#000000',
  },
  // see https://tailwindcss.com/docs/customizing-spacing
  spacing: {
    space0: 0,
    space0_5: '0.125rem',
    space1: '0.25rem',
    space1_5: '0.375rem',
    space2: '0.5rem',
    space2_5: '0.625rem',
    space3: '0.75rem',
    space3_5: '0.875rem',
    space4: '1rem',
    space5: '1.25rem',
    space6: '1.5rem',
    space7: '1.75rem',
    space8: '2rem',
    space9: '2.25rem',
    space10: '2.5rem',
    space11: '2.75rem',
    space12: '3rem',
    space14: '3.5rem',
    space16: '4rem',
    space20: '5rem',
    space24: '6rem',
    space28: '7rem',
    space32: '8rem',
    space36: '9rem',
    space40: '10rem',
    space44: '11rem',
    space48: '12rem',
    space52: '13rem',
    space56: '14rem',
    space60: '15rem',
    space64: '16rem',
    space72: '18rem',
    space80: '20rem',
    space96: '24rem',
  },
  zIndexes: {
    default: 0,
    absolute: 1,
  },
  breakpoints,
  shadows: {
    elevation0: 'none',
    elevation1: createBoxShadow(
      createElevationShadow1(1, 3, 0),
      createElevationShadow2(1, 1, 0),
      createElevationShadow3(2, 1, -1)
    ),
    elevation2: createBoxShadow(
      createElevationShadow1(2, 4, -1),
      createElevationShadow2(4, 5, 0),
      createElevationShadow3(1, 10, 0)
    ),
    elevation3: createBoxShadow(
      createElevationShadow1(4, 5, -2),
      createElevationShadow2(7, 10, 1),
      createElevationShadow3(2, 16, 1)
    ),
    elevation4: createBoxShadow(
      createElevationShadow1(6, 6, -3),
      createElevationShadow2(10, 14, 1),
      createElevationShadow3(4, 18, 3)
    ),
    elevation5: createBoxShadow(
      createElevationShadow1(8, 9, -5),
      createElevationShadow2(15, 22, 2),
      createElevationShadow3(6, 28, 5)
    ),
  },
}
