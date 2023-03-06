import {getCssFontProps} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {FontSize, FontSizes} from '../types'
import {TextSample} from './TextSample'
import {headerText, longText, shortText} from './TextSpecimen'

interface Props {
  textFont: IStyle
  headlineFont: IStyle
  fontSizes: FontSizes
  textFontSize: FontSize
}

const Container: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
  const style: IStyle = {
    maxWidth: 650,
  }
  return <FelaComponent style={style}>{children}</FelaComponent>
}

export const FontMixContent: React.FC<Props> = ({textFont, headlineFont, fontSizes, textFontSize}) => {
  const font1Props = fontSizes.length > 0 ? {...getCssFontProps(fontSizes[0])} : {fontSize: '30px'}
  const extendedHeadline1Font: IStyle = {
    ...headlineFont,
    ...font1Props,
  }
  const font2Props = fontSizes.length > 1 ? {...getCssFontProps(fontSizes[1])} : {fontSize: '24px'}
  const extendedHeadline2Font: IStyle = {
    ...headlineFont,
    ...font2Props,
  }
  const font3Props = fontSizes.length > 2 ? {...getCssFontProps(fontSizes[2])} : {fontSize: '18px'}
  const extendedHeadline3Font: IStyle = {
    ...headlineFont,
    ...font3Props,
  }
  const fontTextProps = fontSizes.length > 2 ? {...getCssFontProps(textFontSize)} : {fontSize: '14px'}
  const extendedTextFont: IStyle = {
    ...textFont,
    ...fontTextProps,
  }

  return (
    <Container>
      <TextSample fontStyles={extendedHeadline1Font} as="h1">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>{longText}</TextSample>
      <TextSample fontStyles={extendedHeadline2Font} as="h2">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>{shortText}</TextSample>
      <TextSample fontStyles={extendedHeadline3Font} as="h3">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>{longText}</TextSample>
      <TextSample fontStyles={extendedHeadline3Font} as="h3">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>{shortText}</TextSample>
      <TextSample fontStyles={extendedHeadline2Font} as="h2">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>{longText}</TextSample>
      <TextSample fontStyles={extendedHeadline1Font} as="h1">
        {headerText}
      </TextSample>
      <TextSample fontStyles={extendedTextFont}>{shortText}</TextSample>
    </Container>
  )
}
