import * as React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import Optional from '../../commons/components/utils/Optional'
import UserForm from '../components/UserForm'
import {User} from '../store/forms.types'

interface TemplateParams {
  id: string,
}

export interface Props extends RouteComponentProps<TemplateParams> {
  loadUser: (id: string) => void,
  saveUser: (user: User, setErrors: any) => void
  user: User,
}

const UserPage: React.FC<Props> = ({user, saveUser, match, loadUser}) => {
  React.useEffect(() => {
    loadUser(match.params.id)
  })
  return (
    <Optional test={user}>
      <UserForm user={user} saveUser={saveUser} cancelUrl="./"/>
    </Optional>
  )
}
export default UserPage
