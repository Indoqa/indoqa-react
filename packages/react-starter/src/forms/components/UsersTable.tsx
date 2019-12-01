import {Box} from '@indoqa/style-system'
import {TFunction} from 'i18next'
import * as React from 'react'
import {FelaComponent, StyleFunction} from 'react-fela'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'
import {Theme} from '../../app/theme'

import LinkButton from '../../commons/components/atoms/LinkButton'
import {User} from '../store/forms.types'

const TableData: React.FC = ({children}) => {
  const style: StyleFunction<Theme> = ({theme}) => ({
    padding: theme.spacing.space1,
  })
  return (
    <FelaComponent style={style} as="td">
      {children}
    </FelaComponent>
  )
}

const renderUserRow = (user: User, baseurl: string, t: TFunction) => (
  <tr key={user.id}>
    <TableData>{user.name}</TableData>
    <TableData>{user.email}</TableData>
    <TableData>
      <LinkButton>
        <Link to={`${baseurl}${user.id}`}>{t('edit')}</Link>
      </LinkButton>
    </TableData>
  </tr>
)

export interface Props {
  users: { [key: string]: User },
  baseurl: string,
}

const UsersTable: React.FC<Props> = ({users, baseurl}) => {
  const {t} = useTranslation('forms')
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
export default UsersTable
