const styledDivCode = `const StyledDiv: React.FC = () => {
  const {css} = useFela()
  const style: IStyle = {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
  }
  return <div className={css(style)}/>
}
`

const styledElementWithChildrenCode = `const StyledElementWithChildren: React.FC = ({children}) => {
  const {css} = useFela()
  const style: IStyle = {
    color: 'blue',
  }
  return (
    <p className={css(style)}>
      {children}
    </p>
  )
}
`
const themedElementWithChildrenCode = `const ThemedElementWithChildren: React.FC = ({children}) => {
  const {css, theme} = useFela<Theme>()
  const style: IStyle = {
    backgroundColor: theme.colors.accent,
    color: 'white',
    fontSize: theme.fontSizes.small,
    paddingTop: 2,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 2,
    borderRadius: 5,
  }
  return (
    <span className={css(style)}>
      {children}
    </span>
  )
}
`
const themedElementWithChildrenAndPropsCode = `interface Props {
  onClick: () => void,
}

const ThemedElementWithChildrenAndProps: React.FC<Props> = ({onClick, children}) => {
  const {css, theme} = useFela<Theme>()
  const style: IStyle = {
    backgroundColor: theme.colors.accent,
    color: 'white',
    fontSize: theme.fontSizes.small,
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
`
const themedElementWithStyleProps = `interface StyleProps {
  color: string,
}

const themedElementWithStyleText: StyleFunction<Theme, StyleProps> = ({color, theme}): IStyle => ({
  color,
  fontSize: theme.fontSizes.small,
})

const themedElementWithStyleBackground: StyleFunction<Theme> = ({theme}): IStyle => ({
  backgroundColor: theme.colors.accent,
  paddingTop: 2,
  paddingRight: 4,
  paddingLeft: 4,
  paddingBottom: 2,
  borderRadius: 5,
})

const ThemedElementWithStyleProps: React.FC<StyleProps> = ({children, ...otherProps}) => {
  const {css} = useFela<Theme>(otherProps)
  return (
    <span className={css(themedElementWithStyleText, themedElementWithStyleBackground)}>
      {children}
    </span>
  )
}

<ThemedElementWithStyleProps color="white">some text</ThemedElementWithStyleProps>
`

const styledWithStaticRendererCode = `const RendererUsage = () => {
  const {renderer} = useFela()
  const style: IStyle = {
    backgroundColor: 'green',
    width: 50,
    height: 50,
  }
  renderer.renderStatic(style, '.some-css-class')
  return <div className="some-css-class"/>
}
`

export {
  styledDivCode,
  styledElementWithChildrenCode,
  themedElementWithChildrenCode,
  themedElementWithChildrenAndPropsCode,
  themedElementWithStyleProps,
  styledWithStaticRendererCode,
}
