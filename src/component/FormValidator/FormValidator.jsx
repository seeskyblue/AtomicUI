import React from 'react';
import PropTypes from 'prop-types';

import { useFormControlContext } from '../FormControl';

import FormValidatorProvider from './FormValidatorContext';

export default function FormValidator(props) {
  const { children, type = 'string', defaultMessage = 'Invalid field' } = props;

  const fcc = useFormControlContext();
  if (__DEVELOPMENT__ && !fcc) {
    console.error('FormValidator should using inside FromControl.');
  }
  const { name, value } = fcc;

  const [error, setError] = React.useState();
  React.useEffect(() => {
    setError(undefined);
  }, [value]);

  const contextValue = React.useMemo(
    () => ({
      value,
      error,
      onCheckValidity: (validity, message = defaultMessage) => {
        if (!validity) {
          setError(prevMessage => prevMessage || message);
        }
      },
    }),
    [defaultMessage, error, value]
  );

  return (
    <FormValidatorProvider value={contextValue}>
      {children}
    </FormValidatorProvider>
  );
}

FormValidator.propTypes = {
  children: PropTypes.node.isRequired,
  defaultMessage: PropTypes.string,
  type: PropTypes.oneOf([
    'string',
    'number',
    'boolean',
    'date',
    'array',
    'object',
  ]),
};
