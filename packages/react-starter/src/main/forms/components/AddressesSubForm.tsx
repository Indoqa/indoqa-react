import {Box, Flex, Text} from '@indoqa/style-system'
import {ArrayHelpers, FieldArray, FormikErrors, FormikTouched} from 'formik'
import i18next from 'i18next'
import * as React from 'react'
import {WithNamespaces, withNamespaces} from 'react-i18next'
import Button from '../../commons/components/atoms/Button'
import FormRow from '../../commons/components/molecules/FormRow'

import Optional from '../../commons/components/utils/Optional'
import {createNewAddress} from '../store/forms.factory'
import {Address} from '../store/forms.types'

const renderAddressHeader = (
  arrayHelpers: ArrayHelpers,
  count: number,
  index: number,
  t: i18next.TFunction,
) => (
  <Box grow={1}>
    <Text mr={1}>{t('address')} {index + 1}</Text>
    <Button onClick={() => arrayHelpers.remove(index)}>-</Button>
    <Optional test={index > 0}>
      <Button onClick={() => arrayHelpers.move(index, index - 1)}>↑</Button>
    </Optional>
    <Optional test={index < count - 1}>
      <Button onClick={() => arrayHelpers.move(index, index + 1)}>↓</Button>
    </Optional>
  </Box>
)

const renderAddressForm = (
  arrayHelpers: ArrayHelpers,
  addresses: Address[],
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
  address: Address,
  index: number,
  t: i18next.TFunction,
) => (
  <Flex key={index} mt={2}>
    {renderAddressHeader(arrayHelpers, addresses.length, index, t)}

    <FormRow name={`addresses.${index}.street`} label={t('street')} errors={errors} touched={touched}/>
    <FormRow name={`addresses.${index}.city`} label={t('city')} errors={errors} touched={touched}/>
    <FormRow name={`addresses.${index}.zipCode`} label={t('zipCode')} errors={errors} touched={touched}/>
    <FormRow name={`addresses.${index}.country`} label={t('country')} errors={errors} touched={touched}/>
  </Flex>
)

const renderForms = (
  arrayHelpers: ArrayHelpers,
  addresses: Address[],
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
  t: i18next.TFunction,
) => (
  <Optional test={addresses && addresses.length > 0}>
    {
      addresses.map((address, index) => (
        renderAddressForm(arrayHelpers, addresses, errors, touched, address, index, t)
      ))
    }
  </Optional>
)

const renderHeader = (arrayHelpers: ArrayHelpers, t: i18next.TFunction) => (
  <Box>
    <Box>
      <Text mr={1}>{t('addresses')}</Text>
      <Button onClick={() => arrayHelpers.push(createNewAddress())}>+</Button>
    </Box>
  </Box>
)

export interface AddressFormProps {
  addresses: Address[],
  errors: FormikErrors<{}>,
  touched: FormikTouched<{}>,
}

const AddressesSubForm: React.FunctionComponent<AddressFormProps & WithNamespaces> =
  ({addresses, errors, touched, t}) => (
    <FieldArray
      name="addresses"
      render={(arrayHelpers) => (
        <Box mt={2}>
          {renderHeader(arrayHelpers, t)}
          {renderForms(arrayHelpers, addresses, errors, touched, t)}
        </Box>
      )}
    />
  )

export default withNamespaces('forms')(AddressesSubForm)
