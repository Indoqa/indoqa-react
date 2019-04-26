import {UIETheme} from './UIETheme'

export const uieFontFamilies = {
  base: 'Lato, sans-serif',
  heading: 'Oswald, sans-serif',
}

export const uieColors = {
  white_1: '#FFFFFF',
  white_2: '#F1F3F5',
  white_3: '#E9ECEF',
  white_4: '#dedede',
  grey_1: '#868E96',
  grey_2: '#495057',
}

export const uieLightTheme: UIETheme = {
  colors: {
    bgMainHeading: uieColors.grey_1,
    bgMenu: uieColors.white_2,
    bgPanelHeader: uieColors.white_2,
    bgContent: uieColors.white_1,
    bgContentHeader: uieColors.white_3,
    text: uieColors.grey_2,
    textMainHeading: uieColors.white_1,
    textPanelHeading: uieColors.grey_1,
    textMenuHeading: uieColors.grey_1,
    textMenuItem: uieColors.grey_2,
    borderPanel: uieColors.white_4,
  },
  fontFamilyCSSImports: 'https://fonts.googleapis.com/css?family=Lato|Oswald:700',
  fontSizes: {
    verySmall: '0.7rem',
    small: '0.8rem',
    text: '0.9rem',
    big: '1.0rem',
    veryBig: '1.2rem',
  },
  fontStyles: {
    base: {
      fontFamily: uieFontFamilies.base,
      fontSize: '0.9rem',
      lineHeight: 1.2,
    },
    headline: {
      fontFamily: uieFontFamilies.heading,
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  spacing: {
    space0: '0',
    space1: '0.25rem',
    space2: '0.5rem',
    space3: '1rem',
    space4: '1.5rem',
  },
  layout: {
    topMenuHeight: '5rem',
  },
}
