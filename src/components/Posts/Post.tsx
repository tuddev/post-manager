import {
  HeartTwoTone,
  CheckCircleTwoTone,
  DeleteTwoTone,
} from '@ant-design/icons';
import { Card, Image, Space } from 'antd';

import { Link } from 'react-router-dom';
import { useDeletePost } from '../../hooks/useDeletePost';
import { useUpdatePost } from '../../hooks/useUpdatePost';
import { TPost } from '../../types/posts-types';

const { Meta } = Card;
type TPostProps = { post: TPost };

export const Post = ({ post }: TPostProps) => {
  const { mutate: update } = useUpdatePost();

  const { mutate: deleteCurrentPost } = useDeletePost(post.id);

  const handleClickFavorite = () => {
    update({
      isFavorite: !post.isFavorite,
    });
  };

  const handleClickPublished = () => {
    update({
      isPublished: !post.isPublished,
    });
  };

  return (
    <Card
      style={{ width: 300 }}
      extra={<Link to={`post/${post.id}`}>More</Link>}
      title={post.title}
      cover={<Image src={post.previewImage} />}
      actions={[
        <HeartTwoTone
          onClick={handleClickFavorite}
          twoToneColor={post.isFavorite ? '#eb2f96' : ''}
          key="favorite"
        />,
        <CheckCircleTwoTone
          onClick={handleClickPublished}
          twoToneColor={post.isPublished ? '#52c41a' : ''}
          key="published"
        />,
        <DeleteTwoTone key="delete" onClick={() => deleteCurrentPost()} />,
      ]}
    >
      <Space direction="vertical">
        <Meta
          description={
            <div
              dangerouslySetInnerHTML={{
                __html: post.description.slice(0, 40),
              }}
            />
          }
        />
      </Space>
    </Card>
  );
}
