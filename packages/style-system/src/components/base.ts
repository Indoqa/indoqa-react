import {IStyle} from 'fela'

import {BaseTheme} from '..'
import {
  BoxModelProps,
  FlexChildProps,
  FontProps,
  MarginProps,
  PaddingProps,
  Spacing,
  StylingProps,
  WithBaseTheme,
} from './types'
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

export const createBoxModelCSSProps = <T extends BaseTheme>(props: BoxModelProps) => {
  const {
    display,
    inline,
    width,
    height,
    fullWidth,
    fullHeight,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    lineClamp,
    position,
  } = props
  const styles = {}

  if (inline) {
    Object.assign(styles, {display: 'inline'})
  }
  if (display) {
    Object.assign(styles, {display})
  }

  if (fullWidth) {
    Object.assign(styles, {width: '100%'})
  } else if (width !== undefined) {
    Object.assign(styles, {width})
  }
  if (maxWidth) {
    Object.assign(styles, {maxWidth})
  }
  if (minWidth) {
    Object.assign(styles, {minWidth})
  }

  if (fullHeight) {
    Object.assign(styles, {height: '100%'})
  } else if (height !== undefined) {
    Object.assign(styles, {height})
  }
  if (maxHeight) {
    Object.assign(styles, {maxHeight})
  }
  if (minHeight) {
    Object.assign(styles, {minHeight})
  }

  if (lineClamp) {
    Object.assign(styles, {
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': typeof lineClamp === 'boolean' ? 1 : lineClamp,
      overflow: 'hidden',
    })
  }

  if (position) {
    Object.assign(styles, {position})
  }

  return styles
}

export const createFlexChildCSSProps = <T extends BaseTheme>(
  props: FlexChildProps,
  theme: BaseTheme,
  outsideMediaQuery: boolean
): IStyle => {
  const {grow, shrink, basis, order, align} = props

  const styles: IStyle = {}
  if (grow !== undefined) {
    Object.assign(styles, {flexGrow: grow})
  } else if (outsideMediaQuery) {
    Object.assign(styles, {flexGrow: 0})
  }

  if (shrink !== undefined) {
    Object.assign(styles, {flexShrink: shrink})
  } else if (outsideMediaQuery) {
    Object.assign(styles, {flexShrink: 1})
  }

  if (basis !== undefined) {
    Object.assign(styles, {flexBasis: basis})
  } else if (outsideMediaQuery) {
    Object.assign(styles, {flexBasis: 'auto'})
  }

  if (order !== undefined) {
    Object.assign(styles, {order})
  }

  if (align !== undefined) {
    Object.assign(styles, {alignSelf: align})
  }
  return styles
}

function getShadow<T extends BaseTheme>(theme: T, shadow: string): string {
  if (shadow in theme.shadows) {
    return theme.shadows[shadow]
  }
  return 'none'
}

export function createStylingCSSProps<T extends BaseTheme>(props: StylingProps<T> & WithBaseTheme, theme: BaseTheme) {
  const {bg, cursorPointer, overflowHidden, shadow, r, rt, rb, rl, rr, rtl, rtr, rbl, rbr} = props
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
  if (shadow && shadow in theme.shadows) {
    Object.assign(styles, {boxShadow: getShadow(theme, shadow as string)})
  }
  if (r) {
    Object.assign(styles, {borderRadius: r})
  }
  if (rt) {
    Object.assign(styles, {borderTopLeftRadius: rt})
    Object.assign(styles, {borderTopRightRadius: rt})
  }
  if (rb) {
    Object.assign(styles, {borderBottomRightRadius: rb})
    Object.assign(styles, {borderBottomLeftRadius: rb})
  }
  if (rl) {
    Object.assign(styles, {borderTopLeftRadius: rl})
    Object.assign(styles, {borderBottomLeftRadius: rl})
  }
  if (rr) {
    Object.assign(styles, {borderBottomRightRadius: rr})
    Object.assign(styles, {borderTopRightRadius: rr})
  }
  if (rtl) {
    Object.assign(styles, {borderTopLeftRadius: rtl})
  }
  if (rtr) {
    Object.assign(styles, {borderTopRightRadius: rtr})
  }
  if (rbl) {
    Object.assign(styles, {borderBottomLeftRadius: rbl})
  }
  if (rbr) {
    Object.assign(styles, {borderBottomRightRadius: rbr})
  }
  return styles
}

export function createFontCSSProps<T extends BaseTheme>(props: FontProps<T> & WithBaseTheme, theme: BaseTheme) {
  const {
    fontStyle,
    fontSize,
    color,
    bold,
    italic,
    underline,
    ellipsis,
    textAlign,
    uppercase,
    wordBreakAll,
    wordWrapAll,
  } = props
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
  if (uppercase) {
    Object.assign(styles, {textTransform: 'uppercase'})
  }
  if (wordBreakAll) {
    Object.assign(styles, {wordBreak: 'break-all'})
  }
  if (wordWrapAll) {
    Object.assign(styles, {wordWrap: 'break-word'})
  }
  return styles
}

export const createMarginCSSProps = (props: MarginProps & WithBaseTheme, theme: BaseTheme) => {
  const {m, mt, mb, ml, mr, mx, my} = props
  const styles = {}
  if (m !== undefined) {
    Object.assign(styles, {margin: createSpacing(theme, m)})
  }
  if (mx !== undefined) {
    Object.assign(styles, {marginLeft: createSpacing(theme, mx)})
    Object.assign(styles, {marginRight: createSpacing(theme, mx)})
  }
  if (my !== undefined) {
    Object.assign(styles, {marginTop: createSpacing(theme, my)})
    Object.assign(styles, {marginBottom: createSpacing(theme, my)})
  }
  if (mt !== undefined) {
    Object.assign(styles, {marginTop: createSpacing(theme, mt)})
  }
  if (mb !== undefined) {
    Object.assign(styles, {marginBottom: createSpacing(theme, mb)})
  }
  if (ml !== undefined) {
    Object.assign(styles, {marginLeft: createSpacing(theme, ml)})
  }
  if (mr !== undefined) {
    Object.assign(styles, {marginRight: createSpacing(theme, mr)})
  }
  return styles
}

export const createPaddingCSSProps = (props: PaddingProps & WithBaseTheme, theme: BaseTheme) => {
  const {p, pt, pb, pl, pr, px, py} = props
  const styles = {}
  if (p !== undefined) {
    Object.assign(styles, {padding: createSpacing(theme, p)})
  }
  if (px !== undefined) {
    Object.assign(styles, {paddingLeft: createSpacing(theme, px)})
    Object.assign(styles, {paddingRight: createSpacing(theme, px)})
  }
  if (py !== undefined) {
    Object.assign(styles, {paddingTop: createSpacing(theme, py)})
    Object.assign(styles, {paddingBottom: createSpacing(theme, py)})
  }
  if (pt !== undefined) {
    Object.assign(styles, {paddingTop: createSpacing(theme, pt)})
  }
  if (pb !== undefined) {
    Object.assign(styles, {paddingBottom: createSpacing(theme, pb)})
  }
  if (pl !== undefined) {
    Object.assign(styles, {paddingLeft: createSpacing(theme, pl)})
  }
  if (pr !== undefined) {
    Object.assign(styles, {paddingRight: createSpacing(theme, pr)})
  }
  return styles
}

export const createSpacing = (theme: BaseTheme, propValue: Spacing) => {
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
    case 5:
      return theme.spacing.space5
    case 6:
      return theme.spacing.space6
    case 7:
      return theme.spacing.space7
    case 8:
      return theme.spacing.space8
    case 9:
      return theme.spacing.space9
    default:
      return theme.spacing.space0
  }
}
