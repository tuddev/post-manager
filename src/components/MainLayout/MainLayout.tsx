import { HomeTwoTone } from '@ant-design/icons';
import { Button, Layout, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './main-layout.module.scss';
import { AppRoutes } from '../../constants/routes';

const { Content } = Layout;

export const MainLayout = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate('/');
  const handleCreatePost = () => navigate(AppRoutes.create);

  return (
    <Layout className={styles.mainLayout}>
      <Header>
        <Space direction="horizontal" size="middle">
          <Button onClick={handleGoHome}>
            <HomeTwoTone />
          </Button>
          <Button type="primary" onClick={handleCreatePost}>
            + Add new post
          </Button>
        </Space>
      </Header>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  );
}
