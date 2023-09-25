import * as yup from 'yup';

export const financeValidationSchema = yup.object().shape({
  budget: yup.number().integer().required(),
  expense: yup.number().integer().required(),
  income: yup.number().integer().required(),
  profit: yup.number().integer().required(),
  business_id: yup.string().nullable().required(),
});
