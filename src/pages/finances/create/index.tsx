import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createFinance } from 'apiSdk/finances';
import { financeValidationSchema } from 'validationSchema/finances';
import { BusinessInterface } from 'interfaces/business';
import { getBusinesses } from 'apiSdk/businesses';
import { FinanceInterface } from 'interfaces/finance';

function FinanceCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: FinanceInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createFinance(values);
      resetForm();
      router.push('/finances');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<FinanceInterface>({
    initialValues: {
      budget: 0,
      expense: 0,
      income: 0,
      profit: 0,
      business_id: (router.query.business_id as string) ?? null,
    },
    validationSchema: financeValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Finances',
              link: '/finances',
            },
            {
              label: 'Create Finance',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Finance
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Budget"
            formControlProps={{
              id: 'budget',
              isInvalid: !!formik.errors?.budget,
            }}
            name="budget"
            error={formik.errors?.budget}
            value={formik.values?.budget}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('budget', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Expense"
            formControlProps={{
              id: 'expense',
              isInvalid: !!formik.errors?.expense,
            }}
            name="expense"
            error={formik.errors?.expense}
            value={formik.values?.expense}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('expense', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Income"
            formControlProps={{
              id: 'income',
              isInvalid: !!formik.errors?.income,
            }}
            name="income"
            error={formik.errors?.income}
            value={formik.values?.income}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('income', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Profit"
            formControlProps={{
              id: 'profit',
              isInvalid: !!formik.errors?.profit,
            }}
            name="profit"
            error={formik.errors?.profit}
            value={formik.values?.profit}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('profit', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<BusinessInterface>
            formik={formik}
            name={'business_id'}
            label={'Select Business'}
            placeholder={'Select Business'}
            fetcher={getBusinesses}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/finances')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'finance',
    operation: AccessOperationEnum.CREATE,
  }),
)(FinanceCreatePage);
