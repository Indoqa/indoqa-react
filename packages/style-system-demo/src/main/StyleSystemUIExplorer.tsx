import {Color, Font, FontMix, FontSizes, Group, UIExplorer} from '@indoqa/ui-explorer'
import * as React from 'react'
import {withTheme} from 'react-fela'

import {Theme} from './app/theme'
import GridSamples from './grid/GridSamples'

interface Props {
  theme: Theme,
}

const getColors = (theme: Theme): Color[] =>
  [
    {name: 'primary', hexCode: theme.colors.primary},
    {name: 'primary-dark', hexCode: theme.colors.primaryDark},
    {name: 'primary-light', hexCode: theme.colors.primaryLight},
    {name: 'text', hexCode: theme.colors.text},
    {name: 'accent', hexCode: theme.colors.accent},
    {name: 'secondary-text', hexCode: theme.colors.textSecondary},
    {name: 'divider', hexCode: theme.colors.divider},
  ]

const getTextFonts = (theme: Theme): Font[] =>
  [
    {name: 'base', fontStyle: theme.fontStyles.base},
  ]

const getHeadlineFonts = (theme: Theme): Font[] =>
  [
    {name: 'alternative', fontStyle: theme.fontStyles.alt},
  ]

const getFontSizes = (theme: Theme): FontSizes =>
  [
    theme.fontSizes.extraBig,
    theme.fontSizes.big,
    theme.fontSizes.text,
    theme.fontSizes.small,
  ]

const getFontMixes = (theme: Theme): FontMix[] =>
  [
    {name: 'System fonts', textFont: theme.fontStyles.base, headlineFont: theme.fontStyles.alt},
  ]

const getGridGroup = (): Group => ({
  name: 'Grid',
  descriptions: [
    {
      name: 'Button',
      component: <button>Click me!</button>,
    },
    {
      name: 'Grid',
      component: <GridSamples/>,
    },
  ],
})

class StyleSystemUIExplorer extends React.Component<Props> {

  public render() {
    const {theme} = this.props

    return (
      <UIExplorer
        projectName="Indoqa Style-System"
        description="Overview"
        textFonts={getTextFonts(theme)}
        headlineFonts={getHeadlineFonts(theme)}
        fontMixes={getFontMixes(theme)}
        fontSizes={getFontSizes(theme)}
        textFontSize={theme.fontSizes.text}
        colors={getColors(theme)}
        groups={[getGridGroup()]}
        mountPath=""
      />
    )
  }
}

export default withTheme(StyleSystemUIExplorer)
