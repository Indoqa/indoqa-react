import {Color, Font, FontMix, FontSizes, Group, UIExplorer} from '@indoqa/ui-explorer'
import * as React from 'react'
import {withTheme} from 'react-fela'

import {Theme} from './app/theme'
import NestedGrid from './grid/NestedGrid'
import NestedResponsiveGrid from './grid/NestedResponsiveGrid'
import SimpleGrid from './grid/SimpleGrid'
import StyleSystemDemoOverview from './StyleSystemDemoOverview'

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

const getBaseComponentGroup = (): Group => ({
  name: 'Base Components',
  descriptions: [
    {
      name: 'Box',
      component: <div/>,
    },
    {
      name: 'Flex',
      component: <div/>,
    },
    {
      name: 'Text',
      component: <div/>,
    },
  ],
})

const getGridGroup = (): Group => ({
  name: 'Grid',
  descriptions: [
    {
      name: 'Simple grid',
      component: <SimpleGrid/>,
    },
    {
      name: 'Nested grid',
      component: <NestedGrid/>,
    },
    {
      name: 'Nested responsive grid',
      component: <NestedResponsiveGrid/>,
    },
  ],
})

const getFelaGroup = (): Group => ({
  name: 'Fela Styling',
  descriptions: [
    {
      name: 'Fela Component',
      component: <div/>,
    },
    {
      name: 'useFela hook',
      component: <div/>,
    },
    {
      name: 'Static rules',
      component: <div/>,
    },
  ],
})

class StyleSystemUIExplorer extends React.Component<Props> {

  public render() {
    const {theme} = this.props

    return (
      <UIExplorer
        colors={getColors(theme)}
        description="Overview"
        fontMixes={getFontMixes(theme)}
        fontSizes={getFontSizes(theme)}
        headlineFonts={getHeadlineFonts(theme)}
        groups={[getBaseComponentGroup(), getGridGroup(), getFelaGroup()]}
        mountPath=""
        overviewPanel={<StyleSystemDemoOverview/>}
        projectName="Indoqa Style-System"
        showBaseStyles={false}
        textFonts={getTextFonts(theme)}
        textFontSize={theme.fontSizes.text}
      />
    )
  }
}

export default withTheme(StyleSystemUIExplorer)
