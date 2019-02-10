import i18next from 'i18next'
import {Box} from '@indoqa/style-system'
import * as React from 'react'
import {createComponent} from 'react-fela'
import {WithNamespaces, withNamespaces} from 'react-i18next'
import {Link} from 'react-router-dom'

import ButtonLink from '../../commons/components/atoms/ButtonLink'
import {User} from '../store/forms.types'

const TableData = createComponent(({theme}) => ({
  padding: theme.spacing.space1,
}), 'td') as any

const renderUserRow = (user: User, baseurl: string, t: i18next.TranslationFunction) => (
  <tr key={user.id}>
    <TableData>{user.name}</TableData>
    <TableData>{user.email}</TableData>
    <TableData>
      <ButtonLink>
        <Link to={`${baseurl}${user.id}`}>{t('edit')}</Link>
      </ButtonLink>
    </TableData>
  </tr>
)

export interface Props {
  users: {[key: string]: User},
  baseurl: string,
}

class UsersTable extends React.Component<Props & WithNamespaces> {

  public render() {
    const {users, baseurl, t} = this.props
    return (
      <Box>
        <table>
          <tbody>
            {Object.keys(users).map((key) => renderUserRow(users[key], baseurl, t))}
          </tbody>
        </table>
      </Box>
    )
  }
}

export default withNamespaces('forms')(UsersTable)
