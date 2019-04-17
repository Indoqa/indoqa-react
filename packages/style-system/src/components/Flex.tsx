import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'

import {BaseTheme} from '../theming/baseTheme'
import {
  BaseProps,
  BoxProps,
  createResponsiveStyles,
  FlatBoxProps,
  FlexContainerProps,
  FlexProps,
  HtmlDivAttributesWithoutStyle,
  mergeThemedStyles,
  WithBaseTheme,
} from './base'
import {createBoxCSSStyle} from './Box'

export const createFlexContainerCSSStyle = (
  {
    inline,
    direction,
    nowrap,
    center,
    justifyContent,
    alignItems,
  }: FlexContainerProps): IStyle => {
  const styles: IStyle = ({
    display: (inline) ? 'inline-flex' : 'flex',
    flexDirection: direction || 'row',
    flexWrap: (nowrap) ? 'nowrap' : 'wrap',
    justifyContent: justifyContent || 'flex-start',
    alignItems: alignItems || 'stretch',
  })
  if (center) {
    const centerStyles: IStyle = {
      justifyContent: justifyContent || 'center',
      alignItems: alignItems || 'center',
      textAlign: 'center',
    }
    Object.assign(styles, centerStyles)
  }
  return styles
}

export function createFlexCSSStyle<T extends BaseTheme>(props: FlatBoxProps<T> & WithBaseTheme, theme: BaseTheme): IStyle {
  return {
    ...createBoxCSSStyle(props, theme),
    ...createFlexContainerCSSStyle(props),
  }
}

function themedFlexStyles<T extends BaseTheme>(props: FlexProps<T>): IStyle {
  return {
    ...createResponsiveStyles(props, createFlexCSSStyle),
  }
}

export function Flex<T extends BaseTheme>(props: FlexProps<T> & BaseProps<T, HtmlDivAttributesWithoutStyle>) {
  const {children, style, htmlAttrs, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps<T>>(themedFlexStyles, style)
  return (
    <FelaComponent<T, FlexProps<T>> style={styles} {...rest}>
      {({className}) => (
        <div className={className} {...htmlAttrs}>
          {children}
        </div>
      )}
    </FelaComponent>
  )
}
