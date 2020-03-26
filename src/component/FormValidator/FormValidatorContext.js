import React from 'react';

const FormValidatorContext = React.createContext(null);

const { Provider: FormValidatorProvider } = FormValidatorContext;
export default FormValidatorProvider;

export function useFormValidatorContext() {
  return React.useContext(FormValidatorContext);
}
