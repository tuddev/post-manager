import { EditOutlined, DeleteTwoTone } from '@ant-design/icons';
import { Button, Empty, Image, notification, Space, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeletePost } from '../hooks/useDeletePost';
import { usePostById } from '../hooks/usePostById';

const { Title, Text } = Typography;

export const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = usePostById(Number(id));

  const { mutate: deleteCurrentPost } = useDeletePost(Number(id), () => {
    notification.success({
      message: 'Your post is deleted successfully 👌',
    });
    navigate('/');
  });

  if (!data) return <Empty />;

  return (
    <Space direction="vertical" color="#f5f5f5">
      <Space direction="horizontal" size="middle">
        <Title>{data.title}</Title>
        <Button onClick={() => navigate(`/edit/${data.id}`)}>
          <EditOutlined />
          Edit post
        </Button>
        <DeleteTwoTone
          key="delete"
          onClick={() => deleteCurrentPost()}
          twoToneColor="#cf1322"
        />
      </Space>
      {!!data.previewImage && <Image src={data.previewImage} />}

      {data.description ? (
        <div
          dangerouslySetInnerHTML={{
            __html: data.description,
          }}
        />
      ) : (
        <Text>no description</Text>
      )}
    </Space>
  );
}
