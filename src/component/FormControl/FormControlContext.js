import React from 'react';

const FormControlContext = React.createContext(null);

const { Provider: FormControlProvider } = FormControlContext;
export default FormControlProvider;

export function useFormControlContext() {
  return React.useContext(FormControlContext);
}

export function mergeContext(props, context, names = []) {
  const pickedContext =
    context &&
    names?.reduce((acc, name) => {
      if (props[name] === undefined) {
        acc[name] = context[name];
      }

      return acc;
    }, {});

  return { ...pickedContext, ...props };
}

export function withFormControl(Component, contextNames = []) {
  const FormControlled = React.forwardRef(function FormControlled(props, ref) {
    const context = useFormControlContext();
    const mergedProps = mergeContext(context, props, contextNames);

    // properties from props will always overwrite context's
    return <Component {...mergedProps} ref={ref} />;
  });

  const componentName = Component.displayName || Component.name;
  FormControlled.displayName = `FormControlled(${componentName})`;

  return FormControlled;
}
