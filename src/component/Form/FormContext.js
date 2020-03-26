import React from 'react';

const FormContext = React.createContext(null);

const { Provider: FormProvider } = FormContext;
export default FormProvider;

export function useFormContext() {
  return React.useContext(FormContext);
}
