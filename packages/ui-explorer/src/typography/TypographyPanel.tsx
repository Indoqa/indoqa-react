import {Flex} from '@indoqa/style-system'
import * as React from 'react'
import {Font, FontMix, FontSize, FontSizes} from '../types'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'
import {FontMixPanel} from './FontMixPanel'
import HeadlineFontStylePanel from './HeadlineFontPanel'
import {TextFontPanel} from './TextFontPanel'

interface Props extends WithUIETheme {
  textFonts: Font[]
  headlineFonts: Font[]
  fontSizes: FontSizes
  fontMixes: FontMix[]
  textFontSize: FontSize
}

const renderTextFont = (font: Font) => {
  return <TextFontPanel key={font.name} name={font.name} fontStyles={font.fontStyle} />
}

const renderHeadlineFont = (font: Font, fontSizes: FontSizes) => {
  return <HeadlineFontStylePanel key={font.name} name={font.name} fontStyles={font.fontStyle} fontSizes={fontSizes} />
}

const renderFontMixes = (fontMix: FontMix, fontSizes: FontSizes, textFontSize: FontSize) => {
  return <FontMixPanel key={fontMix.name} fontMix={fontMix} fontSizes={fontSizes} textFontSize={textFontSize} />
}

const TypographyPanelInternal: React.FC<Props> = ({textFonts, headlineFonts, fontMixes, fontSizes, textFontSize}) => {
  return (
    <React.Fragment>
      <Flex>{headlineFonts.map((font) => renderHeadlineFont(font, fontSizes))}</Flex>
      <Flex>{textFonts.map((font) => renderTextFont(font))}</Flex>
      <Flex>{fontMixes.map((fontMix) => renderFontMixes(fontMix, fontSizes, textFontSize))}</Flex>
    </React.Fragment>
  )
}

export const TypographyPanel = withUIETheme(TypographyPanelInternal)
