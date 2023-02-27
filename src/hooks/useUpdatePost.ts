import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '../constants/queries';
import { updatePost } from '../services/posts-service';
import { TPost } from '../types/posts-types';

export const useUpdatePost = () => {
  const navigate = useNavigate();

  return useMutation<TPost[], unknown, Partial<TPost>, unknown>({
    mutationFn: ({
      title, description, previewImage, id,
    }) => updatePost({
      id,
      title,
      description,
      previewImage,
    }),
    onSuccess: (_, newPost) => {
      queryClient.invalidateQueries(['posts']);
      notification.success({
        message: 'Your post is updated successfully 🦊',
      });
      navigate(`/post/${newPost.id}`);
    },
  });
};
