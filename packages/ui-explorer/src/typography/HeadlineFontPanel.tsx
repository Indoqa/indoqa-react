import {getCssFontProps, Grid, Panel, Row} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {FontSize, FontSizes} from '../types'
import {UIETheme} from '../uietheme/UIETheme'
import {withUIETheme, WithUIETheme} from '../uietheme/withUIETheme'
import {FontStylePanel} from './FontStylePanel'
import {characters} from './TextSpecimen'

interface HeadlineProps extends WithUIETheme {
  fontStyles: IStyle
}

interface WithFontSize {
  fontSize: FontSize
}

interface Props extends HeadlineProps {
  name: string
  fontSizes: FontSizes
}

const HeadlineSample: React.FC<React.PropsWithChildren<HeadlineProps & WithFontSize>> = ({
  fontStyles,
  fontSize,
  uieTheme,
  children,
}) => {
  const style: IStyle = {
    marginBottom: uieTheme.spacing.space2,
    ...getCssFontProps(fontSize),
  }
  return <FelaComponent style={[fontStyles, style]}>{children}</FelaComponent>
}

const renderHeadlineSizeSamples = (fontStyles: IStyle, fontSizes: FontSizes, uieTheme: UIETheme) => {
  return fontSizes.map((fontSize, i) => {
    return (
      <HeadlineSample fontStyles={fontStyles} fontSize={fontSize} uieTheme={uieTheme} key={i}>
        The quick brown fox jumps over the lazy dog.
      </HeadlineSample>
    )
  })
}

const HeadlineFontPanel: React.FC<Props> = ({fontStyles, fontSizes, name, uieTheme}) => {
  return (
    <Grid fullWidth spacing="1rem">
      <Row>
        <Panel>
          <FontStylePanel name={`${name} / sizes`}>
            {renderHeadlineSizeSamples(fontStyles, fontSizes, uieTheme)}
          </FontStylePanel>
        </Panel>
        <Panel>
          <FontStylePanel name={`${name} / characters`}>
            <HeadlineSample fontStyles={fontStyles} fontSize={fontSizes[0]} uieTheme={uieTheme}>
              {characters}
            </HeadlineSample>
          </FontStylePanel>
        </Panel>
      </Row>
    </Grid>
  )
}

export default withUIETheme(HeadlineFontPanel)
