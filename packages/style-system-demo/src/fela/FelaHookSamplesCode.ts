const styledDivCode = `const StyledDiv: React.FC = () => {
  const {css} = useFela()
  const style: PStyle = {
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
  const style: PStyle = {
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
  const style: PStyle = {
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

const rule: StyleFunction<Theme, StyleProps> = ({color, theme}): IStyle => ({
  color,
  backgroundColor: theme.colors.accent,
  fontSize: theme.fontSizes.small,
  paddingTop: 2,
  paddingRight: 4,
  paddingLeft: 4,
  paddingBottom: 2,
  borderRadius: 5,
})

const ThemedElementWithStyleProps: React.FC<StyleProps> = ({children, ...otherProps}) => {
  const {css} = useFela<Theme>(otherProps)
  return (
    <span className={css(rule)}>
      {children}
    </span>
  )
}

<ThemedElementWithStyleProps color="white">some text</ThemedElementWithStyleProps>
`

const styledWithStaticRendererCode = `const RendererUsage: React.FC = () => {
  const {renderer} = useFela()
  const style: PStyle = {
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
