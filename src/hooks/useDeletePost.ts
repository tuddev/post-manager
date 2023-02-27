import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { queryClient } from '../constants/queries';
import { deletePost } from '../services/posts-service';

export const useDeletePost = (id: number, onSuccess?: VoidFunction) => useMutation({
  mutationFn: () => deletePost(id),
  onSuccess: () => {
    queryClient.invalidateQueries(['posts']);
    onSuccess?.();
  },
  onError: () => {
    notification.error({
      message: "Can't delete post 🤷‍♂️",
    });
  },
});
