import {Box, Text} from '@indoqa/style-system'
import i18next from 'i18next'
import * as React from 'react'
import {WithNamespaces, withNamespaces} from 'react-i18next'
import {Link} from 'react-router-dom'
import Logo from '../molecules/Logo'
import MainMenu from '../organisms/MainMenu'
import NavBarWithLeftMenuLayout from './NavBarWithLeftMenuLayout'

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

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({i18n}) => (
  <Box>
    <Language i18n={i18n} lang="en" langLabel="EN"/> | <Language i18n={i18n} lang="de" langLabel="DE"/>
  </Box>
)

interface Props extends WithNamespaces {
  children?: React.ReactNode,
  header?: string,
  title?: string,
}

const MainMenuTemplate: React.FC<Props> = ({title, header, i18n, children}) => {
  const documentTitle = title === undefined ? BASE_TITLE : `${BASE_TITLE} | ${title}`
  const NavBar: React.FC = () => (
    <>
      <NavBarContent title={title} header={header}/>
      <LanguageSwitcher i18n={i18n}/>
    </>
  )
  return (
    <NavBarWithLeftMenuLayout
      title={documentTitle}
      renderMainMenu={() => <MainMenu/>}
      renderNavBar={() => <NavBar/>}
    >
      {children}
    </NavBarWithLeftMenuLayout>
  )
}

export default withNamespaces()(MainMenuTemplate)
