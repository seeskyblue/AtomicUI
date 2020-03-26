import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'helper/debounce';
import useEnhancedEffect from 'helper/useEnhancedEffect';

import FormProvider from './FormContext';

const SUBMIT_DELAY = 200;

function formReducer(state, action) {
  const { type, payload } = action;
}

function useFormReducer() {}

const Form = React.forwardRef(function Form(props, ref) {
  const { children = null, onSubmit, ...others } = props;

  const [data, setData] = React.useState({});
  const [validity, setValidity] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [validating, setValidating] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const submitRef = React.useRef();

  useEnhancedEffect(() => {
    submitRef.current = debounce(event => {
      onSubmit?.(data, event);
    }, SUBMIT_DELAY);

    return submitRef.current?.cancel;
  }, [data, onSubmit]);

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    submitRef.current?.(data, event);
  };

  const handleCheckValidity = async () => {
    setValidating(true);

    try {
      // ignore
    } finally {
      setValidating(false);
    }
  };

  const contextValue = React.useMemo(
    () => ({
      data,
      validity,
      onChange: (name, value) => {
        setData(prevData =>
          Object.is(prevData[name], value)
            ? prevData
            : { ...prevData, [name]: value }
        );
      },
      onCheckValidity: (name, error) => {
        setValidity(prevValidity => {
          if (Object.is(prevValidity[name], error)) return prevValidity;

          const nextValidity = { ...prevValidity, [name]: error };
          if (error === null) delete nextValidity[name];

          return nextValidity;
        });
      },
    }),
    [data, validity]
  );

  return (
    <FormProvider value={contextValue}>
      <form ref={ref} onSubmit={handleSubmit} {...others}>
        {children}
      </form>
    </FormProvider>
  );
});

Form.propTypes = {
  children: PropTypes.node,
  onCheckValidity: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
