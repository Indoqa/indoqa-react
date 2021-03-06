import {Text, Box} from '@indoqa/style-system'
import {IStyle} from 'fela'
import {Field, FieldProps, FormikErrors, FormikTouched, getIn} from 'formik'
import * as React from 'react'
import {useFela} from 'react-fela'
import {Theme} from '../../../app/theme'

export interface Props {
  name: string,
  label: string,
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
}

const Row: React.FC = ({children}) => {
  const style: IStyle = {
    width: '100%',
    marginTop: 3,
    marginBottom: 3,
  }
  return (
    <Box style={style}>
      {children}
    </Box>
  )
}

const Label: React.FC = ({children}) => {
  const {css} = useFela()
  const style: IStyle = {
    display: 'inline-block',
    width: '100',
  }
  return (
    <label className={css(style)}>
      {children}
    </label>
  )
}

interface InputFieldProps {
  fieldProps: FieldProps<any>,
  autoComplete: string,
  hasError: boolean,
}

const InputField: React.FC<InputFieldProps> = ({children, fieldProps, autoComplete, hasError}) => {
  const {css} = useFela()
  const style: IStyle = {
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
  }
  return <input autoComplete={autoComplete} {...fieldProps.field} className={css(style)} />
}

const ErrorMessage: React.FC = ({children}) => {
  const {theme} = useFela<Theme>()
  const style: IStyle = {
    paddingLeft: theme.spacing.space1,
    color: 'red',
  }
  return (
    <Text style={style}>
      {children}
    </Text>
  )
}

const renderLabel = (label: string) => {
  return <Label>{label}</Label>
}

const renderField = (name: string, hasError: boolean) => {
  return (
    <Field
      name={name}
      render={(fieldProps: FieldProps<any>) => (
        <InputField fieldProps={fieldProps} hasError={hasError} autoComplete="off"/>
      )}
    />
  )
}

const renderError = (name: string, hasError: boolean, errors: FormikErrors<any>) => {
  if (!hasError) {
    return null
  }
  return (
    <ErrorMessage>
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
