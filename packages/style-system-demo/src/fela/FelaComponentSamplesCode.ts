const felaComponentSamplesCode = `const StyledDiv: React.FC = () => {
  const style: IStyle = {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  }
  return <FelaComponent style={style}/>
}
`

const styledElementWithChildrenCode = `const StyledParagraph: React.FC = ({children}) => {
  const style: IStyle = {
    color: 'red',
  }
  return (
    <FelaComponent style={style} as="p">
      {children}
    </FelaComponent>)
}
`
const themedElementWithChildrenCode = `const ThemedElementWithChildren: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}): IStyle => ({
    backgroundColor: theme.colors.primary,
    color: 'white',
    fontSize: theme.fontSizes.small,
    paddingTop: 2,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 2,
    borderRadius: 5,
  })
  return (
    <FelaComponent style={style} as="span">
      {children}
    </FelaComponent>
  )
}
`
const themedElementWithChildrenAndPropsCode = `const ThemedElementWithChildrenAndProps: React.FC<Props> = ({onClick, children}) => {
  const style: StyleFunction<Theme> = ({theme}): IStyle => ({
    backgroundColor: theme.colors.primary,
    color: 'white',
    fontSize: theme.fontSizes.small,
    paddingTop: 2,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 2,
    borderRadius: 5,
  })
  const renderButton = ({className}: RenderProps<Theme>) => (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
  return (
    <FelaComponent style={style}>
      {renderButton}
    </FelaComponent>
  )
}
`

export {
  felaComponentSamplesCode,
  styledElementWithChildrenCode,
  themedElementWithChildrenCode,
  themedElementWithChildrenAndPropsCode,
}
