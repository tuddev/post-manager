import { Typography } from 'antd';
import { useParams } from 'react-router-dom';
import { PostForm } from '../components/PostForm/PostForm';
import { usePostById } from '../hooks/usePostById';
import { useUpdatePost } from '../hooks/useUpdatePost';
import { TPostForm } from '../types/posts-types';

export const EditPostPage = () => {
  const { Title } = Typography;
  const { id } = useParams();

  const { data: post } = usePostById(Number(id));
  const { mutate: update, isLoading } = useUpdatePost();

  if (!post) return null;

  const handleSubmit = (values: TPostForm, { setSubmitting }) => {
    if (!values.title) return;

    update({ id: post.id, ...values });
    setSubmitting(false);
  };

  return (
    <>
      <Title>Let's edit your post!</Title>
      <PostForm
        handleFormSubmit={handleSubmit}
        initValues={post}
        isLoading={isLoading}
        buttonText="Edit"
      />
    </>
  );
};
