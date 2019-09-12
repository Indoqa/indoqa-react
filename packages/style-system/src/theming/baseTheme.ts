import {IStyle} from 'fela'

export interface BaseFontSizes {
  readonly verySmall: number | string,
  readonly small: number | string,
  readonly text: number | string,
  readonly big: number | string,
  readonly veryBig: number | string,
}

export interface BaseFontStyles {
  readonly base: IStyle,
  readonly alt: IStyle,
  readonly mono: IStyle,
}

export interface BaseColors {
  readonly text: string,
}

export interface BaseSpacing {
  readonly space0: number | string,
  readonly space1: number | string,
  readonly space2: number | string,
  readonly space3: number | string,
  readonly space4: number | string,
}

export interface BaseZIndexes {
  default: number,
  absolute: number,
}

export interface Breakpoint {
  minWidth: string,
  sort: number,
}

export interface BaseBreakpoints {
  tablet: Breakpoint,
  desktop: Breakpoint,
  largeDesktop: Breakpoint,
}

export interface BaseShadows {
  elevation0: string,
  elevation1: string,
  elevation2: string,
  elevation3: string,
  elevation4: string,
  elevation5: string,
  elevation6: string,
  elevation7: string,
  elevation8: string,
  elevation9: string,
  elevation10: string,
  elevation11: string,
  elevation12: string,
  elevation13: string,
  elevation14: string,
  elevation15: string,
}

export interface BaseTheme {
  readonly fontSizes: BaseFontSizes,
  readonly fontStyles: BaseFontStyles,
  readonly colors: BaseColors,
  readonly spacing: BaseSpacing,
  readonly zIndexes: BaseZIndexes,
  readonly breakpoints: BaseBreakpoints,
  readonly shadows: BaseShadows,
  readonly layout: {},
}

const typeScaleFactor = 1.333
const typeScaleBase = 14
export const typeScale = (level: number) => typeScaleBase + (typeScaleFactor * level)

export interface Shadow {
  offsetX: number,
  offsetY: number,
  blur: number,
  spread: number,
  color: string,
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

export const systemFonts = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, ' +
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
  spacing: {
    space0: 0,
    space1: '0.5rem',
    space2: '1rem',
    space3: '2rem',
    space4: '4rem',
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
      createElevationShadow3(2, 1, -1),
    ),
    elevation2: createBoxShadow(
      createElevationShadow1(1, 5, 0),
      createElevationShadow2(2, 2, 0),
      createElevationShadow3(3, 1, -2),
    ),
    elevation3: createBoxShadow(
      createElevationShadow1(1, 8, 0),
      createElevationShadow2(3, 4, 0),
      createElevationShadow3(3, 3, -2),
    ),
    elevation4: createBoxShadow(
      createElevationShadow1(2, 4, -1),
      createElevationShadow2(4, 5, 0),
      createElevationShadow3(1, 10, 0),
    ),
    elevation5: createBoxShadow(
      createElevationShadow1(3, 5, -1),
      createElevationShadow2(5, 8, 0),
      createElevationShadow3(1, 14, 0),
    ),
    elevation6: createBoxShadow(
      createElevationShadow1(3, 5, -1),
      createElevationShadow2(6, 10, 0),
      createElevationShadow3(1, 18, 0),
    ),
    elevation7: createBoxShadow(
      createElevationShadow1(4, 5, -2),
      createElevationShadow2(7, 10, 1),
      createElevationShadow3(2, 16, 1),
    ),
    elevation8: createBoxShadow(
      createElevationShadow1(5, 5, -3),
      createElevationShadow2(8, 10, 1),
      createElevationShadow3(3, 14, 2),
    ),
    elevation9: createBoxShadow(
      createElevationShadow1(5, 6, -3),
      createElevationShadow2(9, 12, 1),
      createElevationShadow3(3, 16, 2),
    ),
    elevation10: createBoxShadow(
      createElevationShadow1(6, 6, -3),
      createElevationShadow2(10, 14, 1),
      createElevationShadow3(4, 18, 3),
    ),
    elevation11: createBoxShadow(
      createElevationShadow1(6, 7, -4),
      createElevationShadow2(11, 15, 1),
      createElevationShadow3(4, 20, 3),
    ),
    elevation12: createBoxShadow(
      createElevationShadow1(7, 8, -4),
      createElevationShadow2(12, 17, 2),
      createElevationShadow3(5, 22, 4),
    ),
    elevation13: createBoxShadow(
      createElevationShadow1(7, 8, -4),
      createElevationShadow2(13, 19, 2),
      createElevationShadow3(5, 24, 4),
    ),
    elevation14: createBoxShadow(
      createElevationShadow1(7, 9, -4),
      createElevationShadow2(14, 21, 2),
      createElevationShadow3(5, 26, 4),
    ),
    elevation15: createBoxShadow(
      createElevationShadow1(8, 9, -5),
      createElevationShadow2(15, 22, 2),
      createElevationShadow3(6, 28, 5),
    ),
  },
  layout: {},
}
