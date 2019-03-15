import {Box} from '@indoqa/style-system'
import * as React from 'react'
import {useTranslation} from 'react-i18next'
import {Link, RouteComponentProps} from 'react-router-dom'
import LinkButton from '../../commons/components/atoms/LinkButton'
import UsersTable from '../components/UsersTable'
import {User} from '../store/forms.types'

export interface Props extends RouteComponentProps {
  users: { [key: string]: User },
}

const UsersPage: React.FC<Props> = ({users, match}) => {
  const {t} = useTranslation('forms')
  return (
    <Box>
      <UsersTable users={users} baseurl={match.url}/>
      <Box p={1}>
        <LinkButton>
          <Link to={`${match.url}add`}>{t('addUser')}</Link>
        </LinkButton>
      </Box>
    </Box>
  )
}
export default UsersPage
