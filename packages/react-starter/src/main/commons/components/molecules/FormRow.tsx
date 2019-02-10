import * as React from 'react'
import {createComponent, createComponentWithProxy} from 'react-fela'
import {Field, FormikErrors, FormikTouched, getIn} from 'formik'

export interface Props {
  name: string,
  label: string,
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
}

const Row = createComponent(() => ({
  width: '100%',
  marginTop: 3,
  marginBottom: 3,
}))

const Label = createComponent(() => ({
  display: 'inline-block',
  width: '100',
}), 'label')

const InputField = createComponentWithProxy(({hasError}) => ({
  borderStyle: 'solid',
  borderWidth: 1,
  padding: 4,
  borderColor: hasError ? 'red' : 'grey',
  outline: 'none',
  boxShadow: 'none',
  transition: 'all 0.30s ease-in-out',
  ':focus': {
    boxShadow: '0 0 5px rgba(81, 203, 238, 1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(81, 203, 238, 1)',
  },
}), 'input')

const ErrorMessage = createComponent(() => ({
  color: 'red',
}), 'span') as any

const renderLabel = (label: string) => {
  return <Label>{label}</Label>
}

const renderField = (name: string, hasError: boolean) => {
  return (
    <Field
      name={name}
      render={({field}: any) => (
        <InputField {...field} hasError={hasError} autoComplete="off" />
      )}
    />
  )
}

const renderError = (name: string, hasError: boolean, errors: FormikErrors<any>) => {
  if (!hasError) {
    return null
  }
  return (
    <ErrorMessage ml={1}>
      {getIn(errors, name)}
    </ErrorMessage>
  )
}

const FormRow = ({name, label, errors, touched}: Props) => {
  const hasError = getIn(touched, name) && getIn(errors, name)
  return (
    <Row>
      {renderLabel(label)}
      {renderField(name, hasError)}
      {renderError(name, hasError, errors)}
    </Row>
  )
}

export default FormRow
