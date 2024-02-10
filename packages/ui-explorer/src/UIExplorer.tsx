import {BaseTheme, Box, Grid, Panel, Row} from '@indoqa/style-system'
import {IRenderer, IStyle} from 'fela'
import * as React from 'react'
import {FelaComponent, RenderProps, useFela} from 'react-fela'
import {Route, Routes, useLocation} from 'react-router'

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

interface Props {
  colors: Color[]
  description?: string
  fontMixes: FontMix[]
  fontSizes: FontSizes
  groups: Group[]
  headlineFonts: Font[]
  logo?: React.ReactNode
  mountPath: string
  overviewPanel?: React.ReactNode
  projectName: string
  showFundamentals?: boolean
  textFonts: Font[]
  textFontSize: FontSize
  uieTheme?: UIETheme
  renderer?: IRenderer
}

interface InnerContentPanelProps extends WithUIETheme {
  name: string
}

const InnerContentPanel: React.FC<React.PropsWithChildren<InnerContentPanelProps>> = ({name, uieTheme, children}) => {
  const style: IStyle = {
    paddingTop: uieTheme.spacing.space4,
    paddingRight: uieTheme.spacing.space4,
    paddingBottom: uieTheme.spacing.space4,
    paddingLeft: uieTheme.spacing.space4,
  }
  return (
    <>
      <ContentHeader>{name && <ContentHeading>{name}</ContentHeading>}</ContentHeader>
      <Box style={style}>{children}</Box>
    </>
  )
}

interface InnerStyleGuideMenuProps {
  show: boolean
  uieTheme: UIETheme
}

const InnerStyleGuideMenu: React.FC<React.PropsWithChildren<InnerStyleGuideMenuProps>> = ({
  show,
  uieTheme,
  children,
}) => {
  const style: IStyle = {
    paddingBottom: uieTheme.spacing.space2,
    display: show ? 'block' : 'none',
    tablet: {
      display: 'block',
      paddingTop: uieTheme.spacing.space4,
      paddingBottom: uieTheme.spacing.space4,
    },
  }
  return <FelaComponent style={style}>{children}</FelaComponent>
}

interface MenuIconProps {
  show: boolean
  uieTheme: UIETheme
  toggleMenu: () => void
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
      <MenuIcon color={uieTheme.colors.menuIcon} size="35" />
    </div>
  )
  return <FelaComponent style={style}>{renderMenuIcon}</FelaComponent>
}

const createComponentRoute = (name: string, component: React.ReactNode, mountPath: string, uieTheme: UIETheme) => {
  const componentMountPath = `${mountPath}/${cleanUrlPathPart(name)}`
  return (
    <Route
      key={componentMountPath}
      path={componentMountPath}
      element={
        <InnerContentPanel name={name} uieTheme={uieTheme}>
          {component}
        </InnerContentPanel>
      }
    />
  )
}

const createMenuGroups = (groups: Group[]) => {
  return groups.map((componentDescription) => {
    const {name, descriptions} = componentDescription
    const menuItems = descriptions.map((description) => {
      const componentMountPath = `${cleanUrlPathPart(name)}/${cleanUrlPathPart(description.name)}`
      return (
        <MenuItem key={componentMountPath} to={componentMountPath}>
          {description.name}
        </MenuItem>
      )
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
      routes.push(
        createComponentRoute(
          description.name,
          description.component,
          `${mountPath}/${cleanUrlPathPart(name)}`,
          uieTheme
        )
      )
    })
  })
  return routes
}
export const UIExplorer = ({
  colors,
  description,
  fontMixes,
  fontSizes,
  headlineFonts,
  groups,
  logo,
  mountPath,
  overviewPanel,
  projectName,
  showFundamentals = true,
  textFonts,
  textFontSize,
  uieTheme,
}: Props) => {
  const [localUieTheme] = React.useState(uieTheme || uieLightTheme)
  const [showMenu, setShowMenu] = React.useState(false)
  const location = useLocation()
  const {renderer} = useFela()

  React.useLayoutEffect(() => {
    importCss('style-guide-fonts', localUieTheme.fontFamilyCSSImports)
    renderer.renderStatic(
      {
        backgroundColor: '#F0F2F5',
        paddingTop: '4px',
        paddingRight: '2px',
        paddingLeft: '2px',
      },
      'p code'
    )
  }, [localUieTheme.fontFamilyCSSImports, renderer])

  React.useLayoutEffect(() => {
    document.title = `${projectName} | UI-Explorer`
  }, [projectName])

  React.useLayoutEffect(() => {
    setShowMenu(false)
  }, [location])

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState)
  }
  const getDescription = () => {
    if (description || description === '') {
      return description
    }
    return `UI-Explorer ${projectName}`
  }

  return (
    <UIEThemeContext.Provider value={localUieTheme}>
      <Grid spacing={0}>
        <Row height="100vh">
          <Panel width="17.5rem">
            <StyleGuideMenu>
              <MenuHeader>
                <Logo to={mountPath}>{logo || projectName}</Logo>
                <MenuIconWrapper toggleMenu={toggleMenu} show={showMenu} uieTheme={localUieTheme} />
              </MenuHeader>
              <InnerStyleGuideMenu show={showMenu} uieTheme={localUieTheme}>
                {showFundamentals && (
                  <MenuGroup name="Fundamentals">
                    <MenuItem to={`${mountPath}/colors`}>Colors</MenuItem>
                    <MenuItem to={`${mountPath}/typography`}>Typography</MenuItem>
                  </MenuGroup>
                )}
                {createMenuGroups(groups)}
              </InnerStyleGuideMenu>
            </StyleGuideMenu>
          </Panel>
          <Panel style={{minHeight: '100vh'}}>
            <ContentPanel>
              <Routes>
                <Route
                  path="/"
                  element={
                    <InnerContentPanel name={getDescription()} uieTheme={localUieTheme}>
                      {overviewPanel || (
                        <OverviewPanel
                          colors={colors}
                          fontMixes={fontMixes}
                          fontSizes={fontSizes}
                          textFontSize={textFontSize}
                        />
                      )}
                    </InnerContentPanel>
                  }
                />
                <Route
                  path="colors"
                  element={
                    <InnerContentPanel name="Color Scheme" uieTheme={localUieTheme}>
                      <ColorsPanel colors={colors} />
                    </InnerContentPanel>
                  }
                />
                <Route
                  path="typography"
                  element={
                    <InnerContentPanel name="Typography" uieTheme={localUieTheme}>
                      <TypographyPanel
                        textFonts={textFonts}
                        headlineFonts={headlineFonts}
                        fontMixes={fontMixes}
                        fontSizes={fontSizes}
                        textFontSize={textFontSize}
                      />
                    </InnerContentPanel>
                  }
                />
                {createGroupsRoutes(groups, '', localUieTheme)}
              </Routes>
            </ContentPanel>
          </Panel>
        </Row>
      </Grid>
    </UIEThemeContext.Provider>
  )
}
