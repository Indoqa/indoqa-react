import {IStyle} from 'fela'

import {BaseTheme, Spacing} from '..'
import {BoxModelProps, FlexChildProps, FontProps, MarginProps, PaddingProps, StylingProps, WithBaseTheme} from './types'
import {THEME_NOT_AVAILABLE_ERR_MSG} from './utils'

function getColor<T extends BaseTheme>(theme: T, color: string): string {
  if (color in theme.colors) {
    return theme.colors[color]
  }
  return color
}

function getFontSize<T extends BaseTheme>(theme: T, fontSize: string): string {
  if (fontSize in theme.fontSizes) {
    return theme.fontSizes[fontSize]
  }
  return ''
}

function getFontStyle<T extends BaseTheme>(theme: T, fontStyle: string): string {
  if (fontStyle in theme.fontStyles) {
    return theme.fontStyles[fontStyle]
  }
  return ''
}

export const createBoxModelCSSProps = ({inline, width, height, fullWidth, fullHeight}: BoxModelProps) => ({
  display: (inline) ? 'inline' : 'block',
  width: (fullWidth) ? '100%' : width || 'auto',
  height: (fullHeight) ? '100%' : height || 'auto',
})

export const createFlexChildCSSProps = ({grow, shrink, basis, order, align}: FlexChildProps): IStyle => {
  const styles = {
    flexGrow: grow || 0,
    flexShrink: shrink === 0 ? 0 : shrink ? shrink : 1,
    flexBasis: basis === 0 ? 0 : basis ? basis : 'auto',
  }
  if (order !== undefined) {
    Object.assign(styles, {order})
  }
  if (align !== undefined) {
    Object.assign(styles, {alignSelf: align})
  }
  return styles
}

export function createStylingCSSProps<T extends BaseTheme>(
  {bg, cursorPointer, overflowHidden, elevation}: StylingProps<T> & WithBaseTheme, theme: BaseTheme) {
  const styles: IStyle = {}
  if (bg) {
    Object.assign(styles, {backgroundColor: getColor(theme, bg as string)})
  }
  if (cursorPointer) {
    Object.assign(styles, {cursor: 'pointer'})
  }
  if (overflowHidden) {
    Object.assign(styles, {overflow: 'hidden'})
  }
  if (elevation) {
    Object.assign(styles, {boxShadow: lookupElevation(theme, elevation)})
  }
  return styles
}

export function createFontCSSProps<T extends BaseTheme>(
  {fontStyle, fontSize, color, bold, italic, underline, ellipsis, textAlign}: FontProps<T> & WithBaseTheme, theme: BaseTheme) {
  const styles: IStyle = {}
  if (bold) {
    Object.assign(styles, {fontWeight: 700})
  }
  if (italic) {
    Object.assign(styles, {fontStyle: 'italic'})
  }
  if (underline) {
    Object.assign(styles, {textDecoration: 'underline'})
  }
  if (fontStyle) {
    Object.assign(styles, getFontStyle(theme, fontStyle as string))
  }
  if (fontSize) {
    Object.assign(styles, {fontSize: getFontSize(theme, fontSize as string)})
  }
  if (color) {
    Object.assign(styles, {color: getColor(theme, color as string)})
  }
  if (ellipsis) {
    const ellipsisStyles: IStyle = {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }
    Object.assign(styles, ellipsisStyles)
  }
  if (textAlign) {
    Object.assign(styles, {textAlign})
  }
  return styles
}

export const createMarginCSSProps = ({m, mt, mb, ml, mr, mx, my}: MarginProps & WithBaseTheme, theme: BaseTheme) => {
  const styles = {}
  if (m !== undefined) {
    Object.assign(styles, {margin: spacing(theme, m)})
  }
  if (mx !== undefined) {
    Object.assign(styles, {marginLeft: spacing(theme, mx)})
    Object.assign(styles, {marginRight: spacing(theme, mx)})
  }
  if (my !== undefined) {
    Object.assign(styles, {marginTop: spacing(theme, my)})
    Object.assign(styles, {marginBottom: spacing(theme, my)})
  }
  if (mt !== undefined) {
    Object.assign(styles, {marginTop: spacing(theme, mt)})
  }
  if (mb !== undefined) {
    Object.assign(styles, {marginBottom: spacing(theme, mb)})
  }
  if (ml !== undefined) {
    Object.assign(styles, {marginLeft: spacing(theme, ml)})
  }
  if (mr !== undefined) {
    Object.assign(styles, {marginRight: spacing(theme, mr)})
  }
  return styles
}

export const createPaddingCSSProps = ({p, pt, pb, pl, pr, px, py}: PaddingProps & WithBaseTheme, theme: BaseTheme) => {
  // tslint:disable-next-line
  const styles = {}
  if (p !== undefined) {
    Object.assign(styles, {padding: spacing(theme, p)})
  }
  if (px !== undefined) {
    Object.assign(styles, {paddingLeft: spacing(theme, px)})
    Object.assign(styles, {paddingRight: spacing(theme, px)})
  }
  if (py !== undefined) {
    Object.assign(styles, {paddingTop: spacing(theme, py)})
    Object.assign(styles, {paddingBottom: spacing(theme, py)})
  }
  if (pt !== undefined) {
    Object.assign(styles, {paddingTop: spacing(theme, pt)})
  }
  if (pb !== undefined) {
    Object.assign(styles, {paddingBottom: spacing(theme, pb)})
  }
  if (pl !== undefined) {
    Object.assign(styles, {paddingLeft: spacing(theme, pl)})
  }
  if (pr !== undefined) {
    Object.assign(styles, {paddingRight: spacing(theme, pr)})
  }
  return styles
}

const spacing = (theme: BaseTheme, propValue: Spacing) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }

  switch (propValue) {
    case 1:
      return theme.spacing.space1
    case 2:
      return theme.spacing.space2
    case 3:
      return theme.spacing.space3
    case 4:
      return theme.spacing.space4
    default:
      return theme.spacing.space0
  }
}

const lookupElevation = (theme: BaseTheme, elevationValue: number) => {
  if (theme === undefined) {
    throw Error(THEME_NOT_AVAILABLE_ERR_MSG)
  }
  switch (elevationValue) {
    case 1: {
      return theme.shadows.elevation1
    }
    case 2: {
      return theme.shadows.elevation2
    }
    case 3: {
      return theme.shadows.elevation3
    }
    case 4: {
      return theme.shadows.elevation4
    }
    case 5: {
      return theme.shadows.elevation5
    }
    case 6: {
      return theme.shadows.elevation6
    }
    case 7: {
      return theme.shadows.elevation7
    }
    case 8: {
      return theme.shadows.elevation8
    }
    case 9: {
      return theme.shadows.elevation9
    }
    case 10: {
      return theme.shadows.elevation10
    }
    case 11: {
      return theme.shadows.elevation11
    }
    case 12: {
      return theme.shadows.elevation12
    }
    case 13: {
      return theme.shadows.elevation13
    }
    case 14: {
      return theme.shadows.elevation14
    }
    case 15: {
      return theme.shadows.elevation15
    }
    default:
      return theme.shadows.elevation0
  }
}
