import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'

import {BaseTheme, HtmlDivAttributesWithoutStyle} from '..'
import {BoxProps, filterProps, FlexContainerProps, FlexProps, mergeThemedStyles, WithStyle} from './base'
import {createBoxCSSStyles} from './Box'

const align = (center: string | undefined, stretch: boolean | undefined, value: string | undefined) => {
  if (center) {
    return 'center'
  }

  if (value) {
    return value
  }

  return (stretch) ? 'stretch' : 'flex-start'
}

export const createFlexContainerCSSStyle = (
  {
    inline,
    direction = 'row',
    nowrap,
    center,
    justifyContent,
    alignItems,
    stretch,
  }: FlexContainerProps): IStyle => ({
  display: (inline) ? 'inline-flex' : 'flex',
  flexDirection: direction,
  flexWrap: (nowrap) ? 'nowrap' : 'wrap',
  justifyContent: align(center, stretch, justifyContent),
  alignItems: align(center, stretch, alignItems),
})

const themedFlexStyles: StyleFunction<BaseTheme, FlexProps> = (props: FlexProps): IStyle => ({
  ...createBoxCSSStyles(props),
  ...createFlexContainerCSSStyle(props),
})

export function Flex<T extends BaseTheme>(props: FlexProps & HtmlDivAttributesWithoutStyle & WithStyle<T>) {
  const {children, style, ...rest} = props
  const styles = mergeThemedStyles<T, BoxProps>(themedFlexStyles, style)
  return (
    <FelaComponent<T, FlexProps> style={styles} {...rest}>
      {({className}) => (
        <div className={className} {...filterProps(rest)}>
          {children}
        </div>
      )}
    </FelaComponent>
  )
}
