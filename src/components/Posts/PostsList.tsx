import { Empty, Space } from 'antd';
import { Post } from './Post';
import { TPost } from '../../types/posts-types';
import { Spinner } from '../Spinner';

type TPostsListProps = {
  data: TPost[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

export const PostsList = ({ data, isLoading, isError }: TPostsListProps) => {
  if (isLoading) return <Spinner />;

  if (!data || isError || data.length === 0) { return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />; }

  return (
    <Space direction="horizontal" size="middle" wrap align="start">
      {data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Space>
  );
}
