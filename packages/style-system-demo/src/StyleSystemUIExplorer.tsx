import {Color, Font, FontMix, FontSizes, Group, UIExplorer} from '@indoqa/ui-explorer'
import * as React from 'react'
import {withTheme} from 'react-fela'

import {Theme} from './app/theme'
import BoxSamples from './base-components/BoxSamples'
import FlexSamples from './base-components/FlexSamples'
import TextSamples from './base-components/TextSamples'
import FelaComponentSamples from './fela/FelaComponentSamples'
import FelaHookSamples from './fela/FelaHookSamples'
import NestedGridCol from './grid/col/NestedGridCol'
import NestedGridColFlexibleHeight from './grid/col/NestedGridColFlexibleHeight'
import NestedResponsiveGridCol from './grid/col/NestedResponsiveGridCol'
import ResponsiveGridCol from './grid/col/ResponsiveGridCol'
import SimpleGridCol from './grid/col/SimpleGridCol'
import ExplicitWidthGridPanel from './grid/panel/ExplicitWidthGridPanel'
import NestedGridPanel from './grid/panel/NestedGridPanel'
import SimpleGridPanel from './grid/panel/SimpleGridPanel'
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
      component: <BoxSamples/>,
    },
    {
      name: 'Flex',
      component: <FlexSamples/>,
    },
    {
      name: 'Text',
      component: <TextSamples/>,
    },
  ],
})

const getGridPanelGroup = (): Group => ({
  name: 'Grid with Panel',
  descriptions: [
    {
      name: 'Simple',
      component: <SimpleGridPanel/>,
    },
    {
      name: 'Nested',
      component: <NestedGridPanel/>,
    },
    {
      name: 'Explicit width',
      component: <ExplicitWidthGridPanel/>,
    },
  ],
})

const getGridColGroup = (): Group => ({
  name: 'Grid with Col',
  descriptions: [
    {
      name: 'Simple',
      component: <SimpleGridCol/>,
    },
    {
      name: 'Nested',
      component: <NestedGridCol/>,
    },
    {
      name: 'Responsive',
      component: <ResponsiveGridCol/>,
    },
    {
      name: 'Nested - flexible height',
      component: <NestedGridColFlexibleHeight/>,
    },
    {
      name: 'Nested - responsive',
      component: <NestedResponsiveGridCol/>,
    },
  ],
})

const getFelaGroup = (): Group => ({
  name: 'Fela Styling',
  descriptions: [
    {
      name: 'Fela Component',
      component: <FelaComponentSamples/>,
    },
    {
      name: 'useFela React hook',
      component: <FelaHookSamples/>,
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
        groups={[getBaseComponentGroup(), getGridColGroup(), getGridPanelGroup(), getFelaGroup()]}
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
