import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../app/theme'
import Code from '../code/Code'
import {
  felaComponentSamplesCode,
  styledElementWithChildrenCode,
  themedElementWithChildrenAndPropsCode,
  themedElementWithChildrenCode,
} from './FelaComponentSamplesCode'

const StyledDiv: React.FC = () => {
  const style: IStyle = {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
  }
  return <FelaComponent style={style}/>
}

const StyledElementWithChildren: React.FC = ({children}) => {
  const style: IStyle = {
    color: 'red',
  }
  return (
    <FelaComponent style={style} as="p">
      {children}
    </FelaComponent>)
}

const ThemedElementWithChildren: React.FC = ({children}) => {
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

interface Props {
  onClick: () => void,
}

const ThemedElementWithChildrenAndProps: React.FC<Props> = ({onClick, children}) => {
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

const FelaComponentSamples: React.FC = () => (
  <>
    <h3>Styling divs</h3>
    <StyledDiv/>
    <Code initialShow showToggle={false}>{felaComponentSamplesCode}</Code>

    <h3>Styled element with children</h3>
    <StyledElementWithChildren>some text</StyledElementWithChildren>
    <Code initialShow showToggle={false}>{styledElementWithChildrenCode}</Code>

    <h3>Themed element with children</h3>
    <ThemedElementWithChildren>paragraph</ThemedElementWithChildren>
    <Code initialShow showToggle={false}>{themedElementWithChildrenCode}</Code>

    <h3>Themed element with children and passed parameters</h3>
    <ThemedElementWithChildrenAndProps onClick={() => alert('clicked')}>Click me</ThemedElementWithChildrenAndProps>
    <Code initialShow showToggle={false}>{themedElementWithChildrenAndPropsCode}</Code>
  </>
)

export default FelaComponentSamples
