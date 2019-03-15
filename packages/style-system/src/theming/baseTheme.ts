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

export interface BaseTheme {
  readonly fontSizes: BaseFontSizes,
  readonly fontStyles: BaseFontStyles,
  readonly colors: BaseColors,
  readonly spacing: BaseSpacing,
  readonly zIndexes: BaseZIndexes,
  readonly breakpoints: BaseBreakpoints,
  readonly layout: {},
}

const typeScaleFactor = 1.333
const typeScaleBase = 14
export const typeScale = (level: number) => typeScaleBase + (typeScaleFactor * level)

export const systemFonts = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, ' +
  'sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
export const monoSystemFonts = 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'

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
  layout: {},
}
