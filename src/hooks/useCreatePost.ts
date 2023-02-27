import { useMutation } from '@tanstack/react-query';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { queryClient } from '../constants/queries';
import { createPost } from '../services/posts-service';
import { TPost } from '../types/posts-types';

export const useCreatePost = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueriesData<TPost[]>(
        ['posts', 'all'],
        (oldPosts): TPost[] => [...oldPosts, newPost],
      );
      notification.success({
        message: 'Post successfully created 🦄',
      });
      queryClient.invalidateQueries({
        queryKey: ['posts', 'all'],
        refetchType: 'none',
      });
      navigate(`/post/${newPost.id}`);
    },
  });
};
