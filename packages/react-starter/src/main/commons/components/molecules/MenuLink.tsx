import {CSSProperties} from 'react'
import {createComponentWithProxy} from 'react-fela'
import {FelaProps, WithChildren} from '../../../app/types'

interface StyleProps extends CSSProperties {
  '> .active': CSSProperties,
}

const MenuLink = ({theme}: FelaProps): StyleProps => ({
  textTransform: 'uppercase',
  cursor: 'pointer',
  borderBottom: '1px solid #f5f5f5',
  padding: theme.spacing.space1,
  margin: theme.spacing.space1,
  '> .active': {
    color: theme.colors.text,
    fontWeight: 'bold',
    cursor: 'auto',
    textDecoration: 'none',
  },
})

export default createComponentWithProxy<WithChildren>(MenuLink)
