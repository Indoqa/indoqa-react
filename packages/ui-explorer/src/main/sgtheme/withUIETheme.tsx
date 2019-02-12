import * as React from 'react'
import {UIETheme} from './UIETheme'
import StyleGuideThemeContext from './UIEThemeContext'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export interface WithUIETheme {uieTheme: UIETheme}

// see https://github.com/Microsoft/TypeScript/issues/28748
export function withUIETheme<P extends WithUIETheme, R = Omit<P, 'uieTheme'>>(
  Component: React.ComponentClass<P> | React.FC<P>,
): React.FC<R> {
  return function BoundComponent(props: R) {
    return (
      <StyleGuideThemeContext.Consumer>
        {(value) => <Component uieTheme={value} {...(props as any)} />}
      </StyleGuideThemeContext.Consumer>
    )
  }
}
