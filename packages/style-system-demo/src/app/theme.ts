import {BaseColors, BaseFontSizes, baseTheme, BaseTheme, typeScale} from '@indoqa/style-system'

interface FontSizes extends BaseFontSizes {
  readonly extraBig: number | string,
}

interface Colors extends BaseColors {
  readonly primary: string,
  readonly primaryDark: string,
  readonly primaryLight: string,
  readonly accent: string,
  readonly textSecondary: string
  readonly divider: string,
}

interface Layout {
  readonly actionBarHeight: number,
  readonly menuWidth: number,
}

export interface Theme extends BaseTheme {
  readonly fontSizes: FontSizes,
  readonly colors: Colors,
  readonly layout: Layout,
}

const baseColors = {
  black_1: '#000000',
  black_2: '#120012',
  grey_1: '#727272',
  grey_2: '#BDBDBD',
  white_3: '#d5d5d5',
  white_1: '#ffffff',
  blue_1: '#c5cae9',
  blue_2: '#3f51b5',
  blue_3: '#303f9f',
  orange_1: '#ff5722',
}

const baseFontSizes: FontSizes = {
  text: typeScale(1),
  big: typeScale(2),
  veryBig: typeScale(3),
  extraBig: typeScale(3),
  small: typeScale(0),
  verySmall: typeScale(-1),
}

const theme: Theme = {
  breakpoints: baseTheme.breakpoints,
  colors: {
    primary: baseColors.blue_2,
    primaryDark: baseColors.blue_3,
    primaryLight: baseColors.blue_1,
    accent: baseColors.orange_1,
    text: baseColors.black_2,
    textSecondary: baseColors.grey_1,
    divider: baseColors.white_1,
  },
  fontSizes: baseFontSizes,
  fontStyles: baseTheme.fontStyles,
  layout: {
    actionBarHeight: 50,
    menuWidth: 300,
  },
  spacing: baseTheme.spacing,
  shadows: baseTheme.shadows,
  zIndexes: baseTheme.zIndexes,
}

export default theme
