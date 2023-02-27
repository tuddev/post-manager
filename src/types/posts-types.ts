export type TPost = {
  id: number;
  title: string;
  description: string;
  previewImage: string;
  isFavorite: boolean;
  isPublished: boolean;
};

export type TPostForm = {
  title: string;
  description: string;
  previewImage: string;
  isFavorite: boolean;
  isPublished: boolean;
};

export type TCreatePostData = Omit<TPost, 'id'>;

export type TUpdatePost = Partial<TPost> & { id: number };
