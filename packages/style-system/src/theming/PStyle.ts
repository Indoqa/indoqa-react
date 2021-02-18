import {IStyle} from 'fela'

interface BreakPointStyles {
  tablet?: IStyle,
  desktop?: IStyle,
  largeDesktop?: IStyle,
  print?: IStyle,
}

export type PStyle = IStyle | BreakPointStyles