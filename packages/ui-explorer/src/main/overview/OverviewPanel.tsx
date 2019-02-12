import {Box, Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import ColorsPanel from '../colors/ColorsPanel'
import {WithUIETheme, withUIETheme} from '../sgtheme/withUIETheme'
import {Color, FontMix, FontSize, FontSizes} from '../types'
import FontMixContent from '../typography/FontMixContent'

interface Props extends WithUIETheme {
  colors: Color[],
  fontMixes: FontMix[],
  fontSizes: FontSizes,
  textFontSize: FontSize,
}

const OverviewPanel: React.FC<Props> = ({fontMixes, fontSizes, textFontSize, colors, uieTheme}) => {
  const panelStyle: IStyle = {
    marginTop: uieTheme.spacing.space4,
  }
  const textFont = fontMixes[0].textFont
  const headlineFont = fontMixes[0].headlineFont
  return (
    <Flex fullWidth direction="column">
      <Box>
        <Box>
          <ColorsPanel colors={colors} small/>
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

export default withUIETheme(OverviewPanel)
