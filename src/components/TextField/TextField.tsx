import { Input } from 'antd';
import { ErrorMessage, useField } from 'formik';

type TTextFieldProps = {
  name: string;
  type: string;
  placeholder?: string;
  validateCallback?: (value: string) => string | undefined;
};

export const TextField = ({
  name,
  type = 'text',
  placeholder,
  validateCallback,
}: TTextFieldProps) => {
  const [field, meta] = useField({
    name,
    type,
    validate: validateCallback
      ? () => validateCallback(field.value)
      : undefined,
  });

  return (
    <>
      <Input
        /* eslint-disable react/jsx-props-no-spreading */
        {...field}
        type={type}
        placeholder={placeholder}
        status={meta.error ? 'error' : ''}
        width="100%"
      />
      {meta.error && (
        <>
          <br />
          <br />
          <ErrorMessage name={name} />
        </>
      )}
    </>
  );
}
