import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  payment_date: yup.date().required(),
  payment_status: yup.string().required(),
  business_id: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
