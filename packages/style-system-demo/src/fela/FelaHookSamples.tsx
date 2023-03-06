import {getCssFontProps} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {StyleFunction, useFela} from 'react-fela'
import {Theme} from '../app/theme'
import Code from '../code/Code'
import {
  styledDivCode,
  styledElementWithChildrenCode,
  styledWithStaticRendererCode,
  themedElementWithChildrenAndPropsCode,
  themedElementWithChildrenCode,
  themedElementWithStyleProps,
} from './FelaHookSamplesCode'

const StyledDiv: React.FC = () => {
  const {css} = useFela()
  const style: IStyle = {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
  }
  return <div className={css(style)} />
}

const StyledElementWithChildren: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  const {css} = useFela()
  const style: IStyle = {
    color: 'blue',
  }
  return <p className={css(style)}>{children}</p>
}

const ThemedElementWithChildren: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  const {css, theme} = useFela<Theme>()
  const style: IStyle = {
    backgroundColor: theme.colors.accent,
    color: 'white',
    ...getCssFontProps(theme.fontSizes.small),
    paddingTop: 2,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 2,
    borderRadius: 5,
  }
  return <span className={css(style)}>{children}</span>
}

interface Props {
  onClick: () => void
}

const ThemedElementWithChildrenAndProps: React.FC<React.PropsWithChildren<Props>> = ({onClick, children}) => {
  const {css, theme} = useFela<Theme>()
  const style: IStyle = {
    backgroundColor: theme.colors.accent,
    color: 'white',
    ...getCssFontProps(theme.fontSizes.small),
    paddingTop: 2,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 2,
    borderRadius: 5,
  }
  return (
    <button className={css(style)} onClick={onClick}>
      {children}
    </button>
  )
}

interface StyleProps {
  color: string
}

const themedElementWithStyleText: StyleFunction<Theme, StyleProps> = ({color, theme}): IStyle => ({
  color,
  ...getCssFontProps(theme.fontSizes.small),
})

const themedElementWithStyleBackground: StyleFunction<Theme> = ({theme}): IStyle => ({
  backgroundColor: theme.colors.accent,
  paddingTop: 2,
  paddingRight: 4,
  paddingLeft: 4,
  paddingBottom: 2,
  borderRadius: 5,
})

const ThemedElementWithStyleProps: React.FC<React.PropsWithChildren<StyleProps>> = ({children, ...otherProps}) => {
  const {css} = useFela<Theme>(otherProps)
  return <span className={css(themedElementWithStyleText, themedElementWithStyleBackground)}>{children}</span>
}

const RendererUsage: React.FC<React.PropsWithChildren<{}>> = () => {
  const {renderer} = useFela()
  const style: IStyle = {
    backgroundColor: 'green',
    width: 50,
    height: 50,
  }
  renderer.renderStatic(style, '.some-css-class')
  return <div className="some-css-class" />
}

const FelaHookSamples: React.FC = () => (
  <>
    <h3>Styling divs</h3>
    <StyledDiv />
    <Code initialShow showToggle={false}>
      {styledDivCode}
    </Code>

    <h3>Styled element with children</h3>
    <StyledElementWithChildren>some text</StyledElementWithChildren>
    <Code initialShow showToggle={false}>
      {styledElementWithChildrenCode}
    </Code>

    <h3>Themed element with children</h3>
    <ThemedElementWithChildren>paragraph</ThemedElementWithChildren>
    <Code initialShow showToggle={false}>
      {themedElementWithChildrenCode}
    </Code>

    <h3>Themed element with children and passed parameters</h3>
    <ThemedElementWithChildrenAndProps onClick={() => alert('clicked')}>Click me</ThemedElementWithChildrenAndProps>
    <Code initialShow showToggle={false}>
      {themedElementWithChildrenAndPropsCode}
    </Code>

    <h3>Themed element, passed props and multiple styles</h3>
    <ThemedElementWithStyleProps color="white">some text</ThemedElementWithStyleProps>
    <Code initialShow showToggle={false}>
      {themedElementWithStyleProps}
    </Code>

    <h3>Use the Fela renderer</h3>
    <RendererUsage>Styled with static CSS</RendererUsage>
    <Code initialShow showToggle={false}>
      {styledWithStaticRendererCode}
    </Code>
  </>
)

export default FelaHookSamples
