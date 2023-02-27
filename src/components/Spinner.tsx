import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const LoadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export const Spinner = () => <Spin indicator={LoadingIcon} />
