import { UseFormReturnType } from "@mantine/form";

export function defaultForm<T>(
  defaultValue: T
): UseFormReturnType<T, (values: T) => T> {
  return {
    values: defaultValue,
    errors: {},
    setValues: () => {},
    setInitialValues: () => {},
    setErrors: () => {},
    setFieldValue: () => {},
    setFieldError: () => {},
    clearFieldError: () => {},
    clearErrors: () => {},
    reset: () => {},
    validate: () => {
      return { hasErrors: false, errors: {} };
    },
    validateField: () => {
      return { hasError: false, error: <></> };
    },
    reorderListItem: () => {},
    removeListItem: () => {},
    insertListItem: () => {},
    getInputProps: () => {
      return {
        value: "",
        onChange: () => {},
      };
    },
    onSubmit: () => {
      return () => {};
    },
    onReset: () => {},
    isDirty: () => false,
    isTouched: () => false,
    setTouched: () => {},
    setDirty: () => {},
    resetTouched: () => {},
    resetDirty: () => {},
    isValid: () => false,
    getTransformedValues: () => defaultValue,
  };
}
