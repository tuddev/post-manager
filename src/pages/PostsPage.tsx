import { Space, Typography } from 'antd';
import { TabsPosts } from '../components/TabsPosts';

const { Title } = Typography;

export const PostsPage = () => (
    <Space direction="vertical">
      <Title>Posts</Title>
      <TabsPosts />
    </Space>
  )
