import * as React from 'react'
import {Route, RouteComponentProps, Switch} from 'react-router'

import MainMenuTemplate from '../commons/components/templates/MainMenuTemplate'
import UserPage, {AddUserPage} from './pages/UserPage.redux'
import UsersPage from './pages/UsersPage.redux'

const FormsApp: React.FC<RouteComponentProps> = ({match}) => (
  <MainMenuTemplate title="Forms">
    <Switch>
      <Route exact path={`${match.url}/users/`} component={UsersPage}/>
      <Route exact path={`${match.url}/users/add`} component={AddUserPage}/>
      <Route exact path={`${match.url}/users/:id`} component={UserPage}/>
    </Switch>
  </MainMenuTemplate>
)

export default FormsApp
