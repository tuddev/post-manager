import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { queryClient } from '../constants/queries';
import { updatePost } from '../services/posts-service';
import { TPost } from '../types/posts-types';

export const useUpdatePost = (onSuccess?: VoidFunction) => {
  return useMutation<TPost[], unknown, TPost, unknown>({
    mutationFn: (post) => updatePost(post),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      notification.success({
        message: 'Your post is updated successfully 🦊',
      });

      onSuccess?.();
    },
  });
};
