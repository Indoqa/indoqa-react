import {BaseTheme, Box, Grid, Panel, Row, withRenderer} from '@indoqa/style-system'
import {IRenderer, IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, RenderProps} from 'react-fela'
import {Route, RouteComponentProps, withRouter} from 'react-router'

import {ColorsPanel} from './colors/ColorsPanel'
import ContentHeader from './layout/ContentHeader'
import ContentHeading from './layout/ContentHeading'
import ContentPanel from './layout/ContentPanel'
import Logo from './layout/Logo'
import StyleGuideMenu from './layout/Menu'
import MenuGroup from './layout/MenuGroup'
import MenuHeader from './layout/MenuHeader'
import MenuIcon from './layout/MenuIcon'
import MenuItem from './layout/MenuItem'
import {OverviewPanel} from './overview/OverviewPanel'
import {Color, Font, FontMix, FontSize, FontSizes, Group} from './types'
import {TypographyPanel} from './typography/TypographyPanel'
import {UIETheme} from './uietheme/UIETheme'
import {UIEThemeContext} from './uietheme/UIEThemeContext'
import {uieLightTheme} from './uietheme/uieThemes'
import {WithUIETheme} from './uietheme/withUIETheme'
import importCss from './utils/importCss'
import {cleanUrlPathPart} from './utils/urlUtils'

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
    <>
      <ContentHeader>
        {name && <ContentHeading>{name}</ContentHeading>}
      </ContentHeader>
      <Box style={style}>
        {children}
      </Box>
    </>
  )
}

interface InnerStyleGuideMenuProps {
  show: boolean
  uieTheme: UIETheme,
}

const InnerStyleGuideMenu: React.FC<InnerStyleGuideMenuProps> = ({show, uieTheme, children}) => {
  const style: IStyle = {
    paddingBottom: uieTheme.spacing.space2,
    display: show ? 'block' : 'none',
    tablet: {
      display: 'block',
      paddingTop: uieTheme.spacing.space4,
      paddingBottom: uieTheme.spacing.space4,
    },
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

interface MenuIconProps {
  show: boolean,
  uieTheme: UIETheme,
  toggleMenu: () => void,
}

const MenuIconWrapper: React.FC<MenuIconProps> = ({toggleMenu, uieTheme}) => {
  const style: IStyle = {
    cursor: 'pointer',
    tablet: {
      display: 'none',
    },
  }
  const renderMenuIcon = ({className}: RenderProps<BaseTheme>) => (
    <div className={className} onClick={() => toggleMenu()}>
      <MenuIcon color={uieTheme.colors.menuIcon} size="35"/>
    </div>
  )
  return (
    <FelaComponent style={style}>
      {renderMenuIcon}
    </FelaComponent>
  )
}

const createComponentRoute = (name: string, component: React.ReactNode, mountPath: string, uieTheme: UIETheme) => {
  const componentMountPath = `${mountPath}/${cleanUrlPathPart(name)}`
  return (
    <Route key={componentMountPath} exact path={componentMountPath} render={() => (
      <InnerContentPanel name={name} uieTheme={uieTheme}>
        {component}
      </InnerContentPanel>
    )}/>
  )
}

const createMenuGroups = (groups: Group[], mountPath: string) => {
  return groups.map((componentDescription) => {
    const {name, descriptions} = componentDescription
    const menuItems = descriptions.map((description) => {
      const componentMountPath = `${mountPath}/${cleanUrlPathPart(name)}/${cleanUrlPathPart(description.name)}`
      return <MenuItem key={componentMountPath} to={componentMountPath}>{description.name}</MenuItem>
    })
    return (
      <MenuGroup name={name} key={name}>
        {menuItems}
      </MenuGroup>
    )
  })
}

const createGroupsRoutes = (groups: Group[], mountPath: string, uieTheme: UIETheme) => {
  const routes: JSX.Element[] = []
  groups.forEach((componentDescription) => {
    const {name, descriptions} = componentDescription
    descriptions.forEach((description) => {
      routes.push(createComponentRoute(
        description.name,
        description.component,
        `${mountPath}/${cleanUrlPathPart(name)}`,
        uieTheme,
      ))
    })
  })
  return routes
}

interface Props extends RouteComponentProps {
  colors: Color[],
  description?: string,
  fontMixes: FontMix[],
  fontSizes: FontSizes,
  groups: Group[],
  headlineFonts: Font[],
  logo?: React.ReactNode,
  mountPath: string,
  overviewPanel?: React.ReactNode,
  projectName: string,
  showFundamentals?: boolean,
  textFonts: Font[],
  textFontSize: FontSize,
  uieTheme?: UIETheme,
  renderer?: IRenderer,
}

interface State extends WithUIETheme {
  showMenu: boolean,
}

class UIExplorerImpl extends React.Component<Props, State> {

  public static defaultProps = {
    showFundamentals: true,
  }

  constructor(props: Props) {
    super(props)
    const {uieTheme} = props
    this.state = {
      uieTheme: uieTheme || uieLightTheme,
      showMenu: false,
    }
  }

  public getDescription() {
    const {projectName, description} = this.props
    if (description || description === '') {
      return description
    }
    return `UI-Explorer ${projectName}`
  }

  public UNSAFE_componentWillMount() {
    if (this.props.renderer) {
      this.props.renderer.renderStatic({
        backgroundColor: '#F0F2F5',
        paddingTop: '4px',
        paddingRight: '2px',
        paddingLeft: '2px',
      }, 'p code')
    }
  }

  public UNSAFE_componentWillUpdate(nextProps: Readonly<Props>) {
    const currentLocation = this.props.location
    const nextLocation = nextProps.location
    if (currentLocation !== nextLocation) {
      this.setState({showMenu: false})
    }
  }

  public componentDidMount() {
    const {uieTheme} = this.state
    const {fontFamilyCSSImports} = uieTheme
    importCss('style-guide-fonts', fontFamilyCSSImports)
    document.title = `${this.props.projectName} | UI-Explorer`
  }

  public renderOverviewPanel() {
    if (this.props.overviewPanel) {
      return this.props.overviewPanel
    }

    const {colors, fontMixes, fontSizes, textFontSize} = this.props
    return (
      <OverviewPanel
        colors={colors}
        fontMixes={fontMixes}
        fontSizes={fontSizes}
        textFontSize={textFontSize}
      />
    )
  }

  public render() {
    const {
      colors,
      headlineFonts,
      fontMixes,
      fontSizes,
      groups,
      logo,
      mountPath,
      projectName,
      showFundamentals,
      textFonts,
      textFontSize,
    } = this.props
    const {uieTheme, showMenu} = this.state
    return (
      <UIEThemeContext.Provider value={uieTheme}>
        <Grid spacing={0}>
          <Row height="100vh">
            <Panel width="17.5rem">
              <StyleGuideMenu>
                <MenuHeader>
                  <Logo to={mountPath}>{logo || projectName}</Logo>
                  <MenuIconWrapper toggleMenu={this.toggleMenu.bind(this)} show={showMenu} uieTheme={uieTheme}/>
                </MenuHeader>
                <InnerStyleGuideMenu show={showMenu} uieTheme={uieTheme}>
                  {showFundamentals &&
                  <MenuGroup name="Fundamentals">
                    <MenuItem to={`${mountPath}/colors`}>Colors</MenuItem>
                    <MenuItem to={`${mountPath}/typography`}>Typography</MenuItem>
                  </MenuGroup>
                  }
                  {createMenuGroups(groups, mountPath)}
                </InnerStyleGuideMenu>
              </StyleGuideMenu>
            </Panel>
            <Panel style={{minHeight: '100vh'}}>
              <ContentPanel>
                <Route exact path={`${mountPath}/`} render={() => (
                  <InnerContentPanel name={this.getDescription()} uieTheme={uieTheme}>
                    {this.renderOverviewPanel()}
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
                {createGroupsRoutes(groups, mountPath, uieTheme)}
              </ContentPanel>
            </Panel>
          </Row>
        </Grid>
      </UIEThemeContext.Provider>
    )
  }

  private toggleMenu() {
    const {showMenu} = this.state
    this.setState({showMenu: !showMenu})
  }
}

const UIExplorer: any = withRouter(withRenderer(UIExplorerImpl))
export {UIExplorer}
