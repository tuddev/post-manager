import axios from 'axios';
import { MAP_STATE_TO_QUERY_FILTER, PostState } from './constants';
import { TCreatePostData, TPost, TUpdatePost } from '../types/posts-types';

const BASE = 'http://localhost:3001/posts';

export const getPosts = async (
  state: PostState = PostState.all,
): Promise<TPost[]> => {
  const filter = MAP_STATE_TO_QUERY_FILTER[state];

  try {
    const response = await axios.get(`${BASE}/${filter}`);
    return response.data;
  } catch {
    throw new Error();
  }
};

export const createPost = async ({
  description,
  title,
  previewImage,
}: TCreatePostData): Promise<TPost> => {
  try {
    const createResponse = await axios.post(BASE, {
      description,
      title,
      isFavorite: false,
      isPublished: false,
      previewImage,
    });
    return createResponse.data;
  } catch {
    throw new Error();
  }
};

export const updatePost = async ({
  id,
  description,
  title,
  isFavorite,
  isPublished,
  previewImage,
}: TUpdatePost): Promise<TPost[]> => {
  try {
    const createResponse = await axios.patch(`${BASE}/${id}`, {
      id,
      description,
      title,
      isFavorite,
      isPublished,
      previewImage,
    });
    return createResponse.data;
  } catch {
    throw new Error();
  }
};

export const deletePost = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${BASE}/${id}`);
  } catch {
    throw new Error();
  }
};

export const getPostById = async (id: number): Promise<TPost> => {
  try {
    const createResponse = await axios.get(`${BASE}/${id}`);
    return createResponse.data;
  } catch {
    throw new Error();
  }
};
