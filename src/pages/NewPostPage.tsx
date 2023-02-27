import { Typography } from 'antd';
import { PostForm } from '../components/PostForm/PostForm';
import { useCreatePost } from '../hooks/useCreatePost';
import { TPostForm } from '../types/posts-types';

export const INIT_VALUES_POST_FORM: TPostForm = {
  title: '',
  description: '',
  previewImage: '',
  isFavorite: false,
  isPublished: false,
};

export const NewPostPage = () => {
  const { Title } = Typography;

  const { mutate: create, isLoading } = useCreatePost();

  const handleSubmit = (values: TPostForm, { setSubmitting }) => {
    if (!values.title) return;
    create(values);
    setSubmitting(false);
  };

  return (
    <>
      <Title>Let's add a new post!</Title>
      <PostForm
        handleFormSubmit={handleSubmit}
        isLoading={isLoading}
        initValues={INIT_VALUES_POST_FORM}
        buttonText="Add new post"
      />
    </>
  );
};
