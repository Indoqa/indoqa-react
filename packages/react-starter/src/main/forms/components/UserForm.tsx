import {Form, Formik, FormikProps} from 'formik'
import i18next from 'i18next'
import {Box} from '@indoqa/style-system'
import * as React from 'react'
import {WithNamespaces, withNamespaces} from 'react-i18next'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import Button from '../../commons/components/atoms/Button'
import ButtonLink from '../../commons/components/atoms/ButtonLink'
import FormRow from '../../commons/components/molecules/FormRow'
import {User} from '../store/forms.types'

import AddressesSubForm from './AddressesSubForm'

const validationSchema = (t: i18next.TranslationFunction) =>
  Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(t('errorMissingEmail')),
    addresses: Yup.array().of(Yup.object().shape({
      country: Yup.string().required(),
      zipCode: Yup.string().required(),
    })),
  })

export interface Props extends WithNamespaces {
  user: User,
  cancelUrl: string,
  saveUser: (user: User, setErrors: any) => void
}

class UserForm extends React.Component<Props> {

  public render() {
    const {user, cancelUrl, saveUser, t} = this.props
    return (
      <Formik
        key={user.id + user.lastModified.toString()}
        onSubmit={(values, {setErrors}) => saveUser(values, setErrors)}
        initialValues={user}
        validationSchema={validationSchema(t)}
        render={({values, errors, touched, submitForm}: FormikProps<User>) => {
          return (
            <Form>
              <FormRow name="name" label={t('name')} errors={errors} touched={touched}/>
              <FormRow name="email" label={t('email')} errors={errors} touched={touched}/>
              <AddressesSubForm addresses={values.addresses} errors={errors} touched={touched}/>
              <Box mt={2}>
                <ButtonLink>
                  <Link to={cancelUrl}>{t('cancel')}</Link>
                </ButtonLink>
                <Button onClick={() => submitForm()}>{t('save')}</Button>
              </Box>
            </Form>
          )
        }}
      />
    )
  }
}

export default withNamespaces('forms')(UserForm)
