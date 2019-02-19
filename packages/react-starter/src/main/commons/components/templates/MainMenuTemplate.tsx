import {Box, Flex, Text} from '@indoqa/style-system'
import i18next from 'i18next'
import * as React from 'react'
import DocumentTitle from 'react-document-title'
import {createComponentWithProxy} from 'react-fela'
import {WithNamespaces, withNamespaces} from 'react-i18next'
import {Link} from 'react-router-dom'

import Bar from '../molecules/Bar'
import Content from '../molecules/Content'
import Logo from '../molecules/Logo'
import MainMenu from '../organisms/MainMenu'

const BASE_TITLE = 'Indoqa React Starter'

const MOBILE_ONLY = {
  desktop: {
    display: 'none',
  },
  tablet: {
    display: 'none',
  },
}

const Main = createComponentWithProxy(({theme, 'data-menu-open': menuOpen}: any): any => ({
  display: 'flex',
  paddingTop: theme.layout.actionBarHeight,
  height: '100%',
  width: '100%',
  overflow: menuOpen ? 'hidden' : 'auto',
}))

const MenuIcon = createComponentWithProxy(({theme}: any): any => ({
  marginRight: theme.spacing.space2,
  ...MOBILE_ONLY,
}), 'span')

const FixedBar = createComponentWithProxy(() => ({
  position: 'fixed',
  width: '100%',
}))

const MobileMenu = createComponentWithProxy(({theme, 'data-show': show}: any): any => ({
  position: 'absolute',
  zIndex: 10,
  top: theme.layout.actionBarHeight,
  left: show ? 0 : theme.layout.menuWidth * -1,
  height: `calc(100% - ${theme.layout.actionBarHeight}px)`,
  width: theme.layout.menuWidth,
  transition: 'left 0.15s',
  ...MOBILE_ONLY,
}))

const TabletDesktopMenu = createComponentWithProxy(() => ({
  display: 'none',
  desktop: {
    position: 'fixed',
    display: 'block',
    height: '100%',
  },
  tablet: {
    position: 'fixed',
    display: 'block',
    height: '100%',
  },
}))

const ContentOverlay = createComponentWithProxy(({'data-show': show}) => ({
  visibility: show ? 'visible' : 'hidden',
  position: 'absolute',
  backgroundColor: 'black',
  height: '100%',
  width: '100%',
  opacity: show ? 0.6 : 0,
  transition: 'opacity .15s, visibility 0s',
  ...MOBILE_ONLY,
}))

const renderHeaderContent = (title?: string, header?: string) => (
  <React.Fragment>
    <Logo logoHeight={50}>
      <Link to="/">{BASE_TITLE}</Link>
    </Logo>
    <Box>{title}</Box>
    <Box grow={1}/>
    <Box mr={3}>{header}</Box>
  </React.Fragment>
)

const changeLanguage = (i18n: i18next.i18n, lang: string) => i18n.changeLanguage(lang)

const renderLanguage = (i18n: i18next.i18n, langLabel: string, lang: string) => {
  if (i18n.language.substring(0, lang.length) === lang) {
    return <Text>{langLabel}</Text>
  }
  return (
    <a href="#" onClick={() => changeLanguage(i18n, lang)}>{langLabel}</a>
  )
}

const renderLanguageSwitcher = (i18n: i18next.i18n) => (
  <Box>
    {renderLanguage(i18n, 'EN', 'en')} | {renderLanguage(i18n, 'DE', 'de')}
  </Box>
)

interface Props extends WithNamespaces {
  children?: React.ReactNode,
  header?: string,
  title?: string,
}

interface State {
  showMobileMenu: boolean,
}

class MainMenuTemplate extends React.Component<Props, State> {

  public static defaultProps = {
    title: '',
    header: '',
  }

  public state = {
    showMobileMenu: false,
  }

  public render() {
    const {title, header, children, i18n} = this.props
    const documentTitle = title === undefined ? BASE_TITLE : `${BASE_TITLE} | ${title}`
    return (
      <Flex stretch height="100%">
        <DocumentTitle title={documentTitle}/>
        <MobileMenu data-show={this.state.showMobileMenu}>
          <MainMenu/>
        </MobileMenu>
        <ContentOverlay data-show={this.state.showMobileMenu} onClick={() => this.toggleMenu()}/>
        <Box grow={1}>
          <FixedBar>
            <Bar>
              <MenuIcon onClick={() => this.toggleMenu()}>[Menu]</MenuIcon>
              {renderHeaderContent(title, header)}
              {renderLanguageSwitcher(i18n)}
            </Bar>
          </FixedBar>
          <Main data-menu-open={this.state.showMobileMenu}>
            <TabletDesktopMenu>
              <MainMenu/>
            </TabletDesktopMenu>
            <Content>
              {children}
            </Content>
          </Main>
        </Box>
      </Flex>
    )
  }

  private toggleMenu() {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  }
}

export default withNamespaces('translation')(MainMenuTemplate)
