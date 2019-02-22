import {Box, Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import DocumentTitle from 'react-document-title'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'
import {IStyleProject} from '../../../app/types'
import Content from '../molecules/Content'

export const MOBILE_ONLY: IStyleProject = {
  tablet: {
    display: 'none',
  },
}

interface MobileMenuProps {
  show: boolean,
}

const MobileMenu: React.FC<MobileMenuProps> = ({show, children}) => {
  const style: StyleFunction<Theme, IStyleProject> = ({theme}) => ({
    display: show ? 'block' : 'none',
    position: 'fixed',
    zIndex: 10,
    top: theme.layout.actionBarHeight,
    height: `calc(100% - ${theme.layout.actionBarHeight}px)`,
    width: theme.layout.menuWidth,
    transition: 'left 0.15s',
    ...MOBILE_ONLY,
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const FixedBar: React.FC = ({children}) => {
  const style: IStyle = {
    position: 'fixed',
    width: '100%',
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

const NavBar: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing.space2,
    paddingRight: theme.spacing.space2,
    height: theme.layout.actionBarHeight,
    backgroundColor: theme.colors.primaryLight,
    width: 'auto',
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

interface ContentOverlayProps {
  show: boolean,
  onClick: (e: React.MouseEvent) => void,
}

const ContentOverlay: React.FC<ContentOverlayProps> = ({show, onClick, children}) => {
  const style: IStyleProject = {
    visibility: show ? 'visible' : 'hidden',
    position: 'fixed',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    opacity: show ? 0.6 : 0,
    transition: 'opacity .15s, visibility 0s',
    ...MOBILE_ONLY,
  }
  const renderContentOverlay = ({className}: RenderProps<Theme>) => (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
  return (
    <FelaComponent style={style}>
      {renderContentOverlay}
    </FelaComponent>
  )
}

const TabletDesktopMenu: React.FC = ({children}) => {
  const style: IStyleProject = {
    display: 'none',
    tablet: {
      position: 'fixed',
      display: 'block',
      height: '100%',
    },
  }
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

interface MainProps {
  menuOpen: boolean,
}

const Main: React.FC<MainProps> = ({menuOpen, children}) => {
  const style: StyleFunction<Theme> = ({theme}) => ({
    display: 'flex',
    paddingTop: theme.layout.actionBarHeight,
    width: '100%',
  })
  return (
    <FelaComponent style={style}>
      {children}
    </FelaComponent>
  )
}

interface Props {
  title?: string,
  renderMainMenu: () => React.ReactNode,
  renderNavBar: (toggle: () => void) => React.ReactNode,
}

interface State {
  showMobileMenu: boolean,
}

class NavBarWithLeftMenuLayout extends React.Component<Props, State> {

  public static defaultProps = {
    title: '',
    header: '',
  }

  public state = {
    showMobileMenu: false,
  }

  public render() {
    const {title, children, renderNavBar} = this.props
    const {showMobileMenu} = this.state
    return (
      <Flex stretch height="100%">
        <DocumentTitle title={title || ''}/>
        {this.renderMobileMenu()}
        <Box grow={1}>
          <FixedBar>
            <NavBar>
              {renderNavBar(this.toggleMenu.bind(this))}
            </NavBar>
          </FixedBar>
          <Main menuOpen={showMobileMenu}>
            {this.renderTabletDesktopMenu()}
            <Content>
              {children}
            </Content>
          </Main>
        </Box>
      </Flex>
    )
  }

  private renderTabletDesktopMenu() {
    if (this.state.showMobileMenu) {
      return null
    }
    const {renderMainMenu} = this.props
    return (
      <TabletDesktopMenu>
        {renderMainMenu()}
      </TabletDesktopMenu>
    )
  }

  private renderMobileMenu() {
    const {showMobileMenu} = this.state
    const {renderMainMenu} = this.props
    return (
      <>
        <MobileMenu show={showMobileMenu}>
          {renderMainMenu()}
        </MobileMenu>
        <ContentOverlay show={showMobileMenu} onClick={() => this.toggleMenu()}/>
      </>
    )
  }

  private toggleMenu() {
    const {showMobileMenu} = this.state
    this.setState({showMobileMenu: !showMobileMenu})
  }
}

export default NavBarWithLeftMenuLayout
