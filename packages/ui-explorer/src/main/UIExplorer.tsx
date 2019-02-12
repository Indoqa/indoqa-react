import {Box, Grid, Panel, Row} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent} from 'react-fela'
import {Route} from 'react-router'

import ColorsPanel from './colors/ColorsPanel'
import ContentHeader from './layout/ContentHeader'
import ContentPanel from './layout/ContentPanel'
import Heading from './layout/Heading'
import Logo from './layout/Logo'
import MenuGroup from './layout/MenuGroup'
import MenuHeader from './layout/MenuHeader'
import MenuItem from './layout/MenuItem'
import StyleGuideMenu from './layout/Menu'
import OverviewPanel from './overview/OverviewPanel'
import {Color, Font, FontMix, FontSize, FontSizes, Group} from './types'
import TypographyPanel from './typography/TypographyPanel'
import {UIETheme} from './uietheme/UIETheme'
import StyleGuideThemeContext from './uietheme/UIEThemeContext'
import {lightTheme} from './uietheme/uieThemes'
import {WithUIETheme} from './uietheme/withUIETheme'
import importCss from './utils/importCss'

interface Props {
  projectName: string,
  description?: string,
  logo?: React.ReactNode,
  colors: Color[],
  textFonts: Font[],
  headlineFonts: Font[],
  fontSizes: FontSizes,
  textFontSize: FontSize,
  fontMixes: FontMix[],
  groups: Group[],
  mountPath: string,
  uieTheme?: UIETheme,
}

interface InnerContentPanelProps extends WithUIETheme {
  name: string,
}

const InnerContentPanel: React.FC<InnerContentPanelProps> = ({name, uieTheme, children}) => {
  const style: IStyle = {
    paddingTop: uieTheme.spacing.space4,
    paddingRight: uieTheme.spacing.space4,
    paddingBottom: uieTheme.spacing.space4,
    paddingLeft: uieTheme.spacing.space4,
  }
  return (
    <React.Fragment>
      <ContentHeader>
        {name && <Heading as="h1">{name}</Heading>}
      </ContentHeader>
      <Box style={style}>
        {children}
      </Box>
    </React.Fragment>
  )
}

const createComponentRoute = (name: string, component: React.ReactNode, mountPath: string, uieTheme: UIETheme) => {
  const componentMountPath = `${mountPath}/${name.toLowerCase()}`
  return (
    <Route key={componentMountPath} exact path={componentMountPath} render={() => (
      <InnerContentPanel name={name} uieTheme={uieTheme}>
        {component}
      </InnerContentPanel>
    )}/>
  )
}


/**
 * Todos
 * - make colors and overview mixedFontStyle clickable to get to the details
 *   -> see https://www.webdeveloperpal.com/2018/03/07/react-router-v4-navigate-and-redirect-programmatically/
 * - search box
 * - set <title>
 * - printing
 * - mobile menu -> collapsing
 * - show effective CSS properties
 * - show spacings
 * - inline styles (inkl. ul, ol, link, table, etc.)
 */
/**
 * see
 * - https://github.com/yeun/open-color
 * - https://www.producthunt.com/posts/fontspark
 * - https://github.com/pitr12/base-styling-components/blob/master/README.md
 */
class UIExplorer extends React.Component<Props, WithUIETheme> {

  constructor(props: Props) {
    super(props)
    const {uieTheme} = props
    this.state = {
      uieTheme: uieTheme || lightTheme,
    }
  }

  public getDescription() {
    const {projectName, description} = this.props
    if (description || description === '') {
      return description
    }
    return `UI-Explorer ${projectName}`
  }

  public componentDidMount() {
    const {uieTheme} = this.state
    const {fontFamilyCSSImports} = uieTheme
    importCss('style-guide-fonts', fontFamilyCSSImports)
    document.title = `${this.props.projectName} | UI-Explorer`
  }

  public render() {
    const {
      colors,
      textFonts,
      headlineFonts,
      fontMixes,
      fontSizes,
      textFontSize,
      groups,
      mountPath,
      logo,
      projectName,
    } = this.props
    const {uieTheme} = this.state

    const menuGroups = groups.map((componentDescription) => {
      const {name, descriptions} = componentDescription
      const menuItems = descriptions.map((description) => {
        const componentMountPath = `${mountPath}/${name.toLowerCase()}/${description.name.toLowerCase()}`
        return <MenuItem key={componentMountPath} to={componentMountPath}>{description.name}</MenuItem>
      })
      return (
        <MenuGroup name={name} key={name}>
          {menuItems}
        </MenuGroup>
      )
    })

    const routes: JSX.Element[] = []
    groups.forEach((componentDescription) => {
      const {name, descriptions} = componentDescription
      descriptions.forEach((description) => {
        routes.push(createComponentRoute(
          description.name,
          description.component,
          `${mountPath}/${name.toLowerCase()}`,
          uieTheme,
        ))
      })
    })

    return (
      <StyleGuideThemeContext.Provider value={uieTheme}>
        <Grid spacing={0}>
          <Row height="100vh">
            <Panel width="15rem">
              <StyleGuideMenu>
                <MenuHeader>
                  <Logo to={mountPath}>{logo || projectName}</Logo>
                </MenuHeader>
                <FelaComponent style={{height: uieTheme.spacing.space3}}/>
                <MenuGroup name="Base Styles">
                  <MenuItem to={`${mountPath}/colors`}>Colors</MenuItem>
                  <MenuItem to={`${mountPath}/typography`}>Typography</MenuItem>
                </MenuGroup>
                {menuGroups}
              </StyleGuideMenu>
            </Panel>
            <Panel>
              <ContentPanel>
                <Route exact path={mountPath} render={() => (
                  <InnerContentPanel name={this.getDescription()} uieTheme={uieTheme}>
                    <OverviewPanel
                      colors={colors}
                      fontMixes={fontMixes}
                      fontSizes={fontSizes}
                      textFontSize={textFontSize}
                    />
                  </InnerContentPanel>
                )}/>
                <Route exact path={`${mountPath}/colors`} render={() => (
                  <InnerContentPanel name="Color Scheme" uieTheme={uieTheme}>
                    <ColorsPanel colors={colors}/>
                  </InnerContentPanel>
                )}/>
                <Route exact path={`${mountPath}/typography`} render={() => (
                  <InnerContentPanel name="Typography" uieTheme={uieTheme}>
                    <TypographyPanel
                      textFonts={textFonts}
                      headlineFonts={headlineFonts}
                      fontMixes={fontMixes}
                      fontSizes={fontSizes}
                      textFontSize={textFontSize}
                    />
                  </InnerContentPanel>
                )}/>
                {routes}
              </ContentPanel>
            </Panel>
          </Row>
        </Grid>
      </StyleGuideThemeContext.Provider>
    )
  }
}

export {UIExplorer}
