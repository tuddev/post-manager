import { Image, Space } from 'antd';
import Button from 'antd/es/button';
import { Form, Formik } from 'formik';

import { TPostForm } from '../../types/posts-types';
import { Spinner } from '../Spinner';
import { TextEditorField } from '../TextEditorField';
import { TextField } from '../TextField/TextField';
import { isRequired } from '../validate/validateFunctions';

type TPostFormProps = {
  isLoading: boolean;
  handleFormSubmit: (values: TPostForm, { setSubmitting }) => void;
  initValues: TPostForm;
  buttonText: string;
};

export const PostForm = ({
  handleFormSubmit,
  isLoading,
  initValues,
  buttonText,
}: TPostFormProps) => {
  if (isLoading) return <Spinner />;

  return (
    <Formik initialValues={initValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit, isSubmitting, values: { previewImage } }) => (
        <Form onSubmit={handleSubmit}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <TextField
              name="title"
              type="text"
              validateCallback={isRequired}
              placeholder="Введите название"
            />
            <TextField
              name="previewImage"
              type="text"
              placeholder="Введите URL картинки"
            />
            {!!previewImage && <Image width={200} src={previewImage} />}

            <TextEditorField name="description" />
            <Button disabled={isSubmitting} type="primary" htmlType="submit">
              {buttonText}
            </Button>
          </Space>
        </Form>
      )}
    </Formik>
  );
}
