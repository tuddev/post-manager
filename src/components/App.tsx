import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout';
import { queryClient } from '../constants/queries';
import { AppRoutes } from '../constants/routes';
import { EditPostPage } from '../pages/EditPostPage';
import { NewPostPage } from '../pages/NewPostPage';
import { PostPage } from '../pages/PostPage';
import { PostsPage } from '../pages/PostsPage';

export const App = () => (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PostsPage />} />
            <Route path={AppRoutes.post} element={<PostPage />} />
            <Route path={AppRoutes.create} element={<NewPostPage />} />
            <Route path={AppRoutes.edit} element={<EditPostPage />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
