import { useQuery } from '@tanstack/react-query';
import { getPostById } from '../services/posts-service';

export const usePostById = (id: number) => useQuery({
  queryFn: () => getPostById(id),
  queryKey: ['post'],
});
