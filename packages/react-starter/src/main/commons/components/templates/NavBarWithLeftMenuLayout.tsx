import {Box, Flex} from '@indoqa/style-system'
import {IStyle} from 'fela'
import * as React from 'react'
import DocumentTitle from 'react-document-title'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {Theme} from '../../../app/theme'
import {CSSPropertiesWithBreakpointExtensions} from '../../../app/types'
import Content from '../molecules/Content'

const MOBILE_ONLY: CSSPropertiesWithBreakpointExtensions = {
  desktop: {
    display: 'none',
  },
  tablet: {
    display: 'none',
  },
}

interface MobileMenuProps {
  show: boolean,
}

const MobileMenu: React.FC<MobileMenuProps> = ({show, children}) => {
  const style: StyleFunction<Theme, CSSPropertiesWithBreakpointExtensions> = ({theme}) => ({
    position: 'absolute',
    zIndex: 10,
    top: theme.layout.actionBarHeight,
    left: show ? 0 : theme.layout.menuWidth * -1,
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

interface ContentOverlayProps {
  show: boolean,
  onClick: (e: React.MouseEvent) => void,
}

const ContentOverlay: React.FC<ContentOverlayProps> = ({show, onClick, children}) => {
  const style: CSSPropertiesWithBreakpointExtensions = {
    visibility: show ? 'visible' : 'hidden',
    position: 'absolute',
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
  const style: CSSPropertiesWithBreakpointExtensions = {
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
    height: '100%',
    width: '100%',
    overflow: menuOpen ? 'hidden' : 'auto',
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
    const {title, children, renderMainMenu} = this.props
    const {showMobileMenu} = this.state
    return (
      <Flex stretch height="100%">
        <DocumentTitle title={title || ''}/>
        <MobileMenu show={showMobileMenu}>
          {renderMainMenu()}
        </MobileMenu>
        <ContentOverlay show={showMobileMenu} onClick={() => this.toggleMenu()}/>
        <Box grow={1}>
          <FixedBar>
            {renderMainMenu()}
          </FixedBar>
          <Main menuOpen={showMobileMenu}>
            <TabletDesktopMenu>
              {renderMainMenu()}
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

export default NavBarWithLeftMenuLayout
