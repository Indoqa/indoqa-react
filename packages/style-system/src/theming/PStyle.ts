import {IStyle} from 'fela'

export interface PStyle extends IStyle {
  tablet?: IStyle,
  desktop?: IStyle,
  largeDesktop?: IStyle,
  print?: IStyle,
}
