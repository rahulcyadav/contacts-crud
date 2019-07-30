import validator from 'validator';

export const validateName = (value: string) => {
  let errorMessage;
  if (validator.isEmpty(value, { ignore_whitespace: false })) {
    return 'Required';
  }
  if (!validator.isAlpha(value)) {
    errorMessage = 'Invalid characters';
  }

  return errorMessage;
};

export const validateEmail = (value: string) => {
  let errorMessage;
  if (validator.isEmpty(value, { ignore_whitespace: false })) {
    return 'Required';
  }
  if (!validator.isEmail(value)) {
    errorMessage = 'Invalid email';
  }

  return errorMessage;
};

export const validatePhone = (value: string) => {
  let errorMessage;
  if (validator.isEmpty(value, { ignore_whitespace: false })) {
    return 'Required';
  }
  if (!validator.isMobilePhone(value, 'en-IN')) {
    errorMessage = 'Invalid phone number';
  }

  return errorMessage;
};
