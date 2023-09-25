import * as yup from 'yup';

export const vendorValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
