import { useQuery } from '@tanstack/react-query';
import { notification } from 'antd';
import { PostState } from '../services/constants';
import { getPosts } from '../services/posts-service';

export const REFRESH_TIMEOUT = 1000 * 5;

export const usePostsList = (state: PostState) => useQuery({
  queryKey: ['posts', state],
  queryFn: () => getPosts(state),
  staleTime: REFRESH_TIMEOUT,
  onError: () => notification.error({
    message: "Can't get posts 🤷‍♂️",
  }),
});
