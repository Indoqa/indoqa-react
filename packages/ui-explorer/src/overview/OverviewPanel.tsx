import {Box, Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {ColorsPanel} from '../colors/ColorsPanel'
import {Color, FontMix, FontSize, FontSizes} from '../types'
import {FontMixContent} from '../typography/FontMixContent'
import {WithUIETheme, withUIETheme} from '../uietheme/withUIETheme'

interface Props extends WithUIETheme {
  colors: Color[]
  fontMixes: FontMix[]
  fontSizes: FontSizes
  textFontSize: FontSize
}

const uniqueColors = (colors: Color[]): Color[] => {
  const colorsMap: Map<string, Color> = new Map()
  colors.forEach((color) => {
    const {hexCode} = color
    if (hexCode) {
      colorsMap.set(hexCode, color)
    }
  })
  const result: Color[] = []
  colorsMap.forEach((color) => {
    result.push(color)
  })
  return result
}

const OverviewPanelInternal: React.FC<Props> = ({fontMixes, fontSizes, textFontSize, colors, uieTheme}) => {
  const panelStyle: IStyle = {
    marginTop: uieTheme.spacing.space4,
  }
  const textFont = fontMixes[0].textFont
  const headlineFont = fontMixes[0].headlineFont
  return (
    <Flex fullWidth direction="column">
      <Box>
        <Box>
          <ColorsPanel colors={uniqueColors(colors)} small />
        </Box>
        <Box style={panelStyle}>
          <FontMixContent
            textFont={textFont}
            headlineFont={headlineFont}
            fontSizes={fontSizes}
            textFontSize={textFontSize}
          />
        </Box>
      </Box>
    </Flex>
  )
}

export const OverviewPanel = withUIETheme(OverviewPanelInternal)
