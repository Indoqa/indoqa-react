import {Grid, Panel, Row} from '@indoqa/style-system'
import * as React from 'react'
import {FontMix, FontSize, FontSizes} from '../types'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'
import {FontMixContent} from './FontMixContent'
import {FontStylePanel} from './FontStylePanel'

interface Props extends WithUIETheme {
  fontSizes: FontSizes,
  fontMix: FontMix,
  textFontSize: FontSize,
}

const FontMixPanelInternal: React.FC<Props> = ({fontSizes, textFontSize, fontMix}) => {
  const {name, textFont, headlineFont} = fontMix
  return (
    <Grid spacing="1rem" fullWidth>
      <Row>
        <Panel>
          <FontStylePanel name={name}>
            <FontMixContent
              textFont={textFont}
              headlineFont={headlineFont}
              fontSizes={fontSizes}
              textFontSize={textFontSize}
            />
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export const FontMixPanel = withUIETheme(FontMixPanelInternal)
