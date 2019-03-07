import {Box, PStyle, Text} from '@indoqa/style-system'
import i18next from 'i18next'
import * as React from 'react'
import {FelaComponent, RenderProps, StyleFunction} from 'react-fela'
import {WithTranslation, withTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Theme} from '../../../app/theme'
import Logo from '../molecules/Logo'
import MainMenu from '../organisms/MainMenu'
import NavBarWithLeftMenuLayout, {MOBILE_ONLY} from './NavBarWithLeftMenuLayout'

const BASE_TITLE = 'Indoqa React Starter'

interface NavBarContentProps {
  title?: string,
  header?: string
}

const NavBarContent: React.FC<NavBarContentProps> = ({title, header}) => (
  <>
    <Logo logoHeight={50}>
      <Link to="/">{BASE_TITLE}</Link>
    </Logo>
    <Box>{title}</Box>
    <Box grow={1}/>
    <Box mr={3}>{header}</Box>
  </>
)

interface LanguageProps {
  i18n: i18next.i18n,
  langLabel: string,
  lang: string
}

const Language: React.FC<LanguageProps> = ({i18n, lang, langLabel}) => {
  if (i18n.language.substring(0, lang.length) === lang) {
    return <Text>{langLabel}</Text>
  }
  return (
    <a href="#" onClick={() => i18n.changeLanguage(lang)}>{langLabel}</a>
  )
}

interface LanguageSwitcherProps {
  i18n: i18next.i18n,
}

interface MenuIconProps {
  onClick: (e: React.MouseEvent) => void,
}

const MenuIcon: React.FC<MenuIconProps> = ({onClick, children}) => {
  const style: StyleFunction<Theme, PStyle> = ({theme}) => {
    return {
      marginRight: theme.spacing.space2,
      ...MOBILE_ONLY,
    }
  }
  const renderIcon = ({className}: RenderProps<Theme>) => (
    <span className={className} onClick={onClick}>
      {children}
    </span>
  )
  return (
    <FelaComponent style={style}>
      {renderIcon}
    </FelaComponent>
  )
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({i18n}) => (
  <Box>
    <Language i18n={i18n} lang="en" langLabel="EN"/> | <Language i18n={i18n} lang="de" langLabel="DE"/>
  </Box>
)

interface Props extends WithTranslation {
  children?: React.ReactNode,
  header?: string,
  title?: string,
}

interface NavBarProps {
  toggleMenu: () => void
}

const MainMenuTemplate: React.FC<Props> = ({title, header, i18n, children}) => {
  const documentTitle = title === undefined ? BASE_TITLE : `${BASE_TITLE} | ${title}`
  const NavBar: React.FC<NavBarProps> = ({toggleMenu}) => (
    <>
      <MenuIcon onClick={() => toggleMenu()}>[Menu]</MenuIcon>
      <NavBarContent title={title} header={header}/>
      <LanguageSwitcher i18n={i18n}/>
    </>
  )
  return (
    <NavBarWithLeftMenuLayout
      title={documentTitle}
      renderMainMenu={() => <MainMenu/>}
      renderNavBar={(toggleMenu) => <NavBar toggleMenu={toggleMenu}/>}
    >
      {children}
    </NavBarWithLeftMenuLayout>
  )
}

export default withTranslation()(MainMenuTemplate)
