import { useField } from 'formik';
import 'react-quill/dist/quill.core.css';
import ReactQuill from 'react-quill';

type TTextEditorFieldProps = {
  name: string;
};

export const TextEditorField = ({ name }: TTextEditorFieldProps) => {
  const [{ onChange, value }] = useField<string>(name);

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange(name)}
      placeholder="Введите описание"
    />
  );
}
