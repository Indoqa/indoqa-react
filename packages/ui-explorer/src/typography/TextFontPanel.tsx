import {Grid, Panel, Row} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'
import {FontStylePanel} from './FontStylePanel'
import {TextSample} from './TextSample'
import {characters, longText, longTextInlineStyle} from './TextSpecimen'

interface Props extends WithUIETheme {
  name: string
  fontStyles: IStyle
}

const TextFontPanelInternal: React.FC<Props> = ({fontStyles, name}) => {
  return (
    <Grid spacing="1rem" fullWidth>
      <Row>
        <Panel>
          <FontStylePanel name={`${name} / plain`}>
            <TextSample fontStyles={fontStyles}>{characters}</TextSample>
            <TextSample fontStyles={fontStyles}>{longText}</TextSample>
          </FontStylePanel>
        </Panel>
        <Panel>
          <FontStylePanel name={`${name} / inline styles`}>
            <TextSample fontStyles={fontStyles} as="div">
              {longTextInlineStyle}
            </TextSample>
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export const TextFontPanel = withUIETheme(TextFontPanelInternal)
