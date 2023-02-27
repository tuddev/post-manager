import { UseQueryResult } from '@tanstack/react-query';
import { Tabs, TabsProps } from 'antd';
import { useState } from 'react';
import { PostsList } from './Posts/PostsList';
import { usePostsList } from '../hooks/usePostsList';
import { PostState } from '../services/constants';
import { TPost } from '../types/posts-types';

type TTab = {
  key: string;
  label: string;
  children: JSX.Element;
};

const getTabItem = (
  key: PostState,
  label: string,
  requstData: UseQueryResult<TPost[], unknown>,
): TTab => {
  const { data, isError, isLoading } = requstData;

  return {
    key,
    label,
    children: <PostsList data={data} isLoading={isLoading} isError={isError} />,
  };
};

export const TabsPosts = () => {
  const [value, setValue] = useState<PostState>(PostState.all);
  const data = usePostsList(value);

  const items: TabsProps['items'] = [
    getTabItem(PostState.all, 'All', data),
    getTabItem(PostState.favorite, 'Favorite', data),
    getTabItem(PostState.inWork, 'In work', data),
    getTabItem(PostState.published, 'Published', data),
  ];

  const handleChange = (activeKey: PostState) => {
    setValue(activeKey);
  };

  return (
    <Tabs
      defaultActiveKey={PostState.all}
      items={items}
      onChange={handleChange}
    />
  );
}
