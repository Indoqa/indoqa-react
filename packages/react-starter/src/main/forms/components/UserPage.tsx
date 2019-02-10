import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import Optional from '../../commons/components/utils/Optional'
import {User} from '../store/forms.types'
import UserForm from './UserForm'

interface TemplateParams {
  id: string,
}

export interface UserFormProps extends RouteComponentProps<TemplateParams> {
  loadUser: (id: string) => void,
  saveUser: (user: User, setErrors: any) => void
  user: User,
}

export default class UserPage extends React.Component<UserFormProps> {

  public componentWillMount() {
    const {match, loadUser} = this.props
    loadUser(match.params.id)
  }

  public render() {
    const {user, saveUser} = this.props
    return (
      <Optional test={user}>
        <UserForm user={user} saveUser={saveUser} cancelUrl="./" />
      </Optional>
    )
  }
}
