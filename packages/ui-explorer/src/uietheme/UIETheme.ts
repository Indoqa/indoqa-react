import {IStyle} from 'fela'

export interface UIETheme {
  colors: {
    bgMenu: string,
    bgMainHeading: string,
    bgPanelHeader: string,
    bgContent: string,
    bgContentHeader: string,
    bgContentHeading: string,
    bgScrollbarThumb: string,
    bgScrollbarThumbHover: string,
    bgScrollbarTrack: string,
    bgScrollbarTrackHover: string,
    text: string,
    textMainHeading: string,
    textPanelHeading: string,
    textMenuHeading: string,
    textMenuItem: string,
    borderPanel: string,
    menuIcon: string,
  }
  fontFamilyCSSImports: string,
  fontStyles: {
    base: IStyle,
    headline: IStyle,
  }
  fontSizes: {
    text: number | string,
    big: number | string,
    veryBig: number | string,
    small: number | string,
    verySmall: number | string,
  }
  spacing: {
    space0: string,
    space1: string,
    space2: string,
    space3: string,
    space4: string,
  },
  layout: {
    topMenuHeight: string,
  }
}
