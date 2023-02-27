export enum PostState {
  favorite = 'favorite',
  published = 'published',
  inWork = 'inWork',
  all = 'all',
}

export const MAP_STATE_TO_QUERY_FILTER = {
  [PostState.all]: '',
  [PostState.favorite]: '?isFavorite=true',
  [PostState.published]: '?isPublished=true',
  [PostState.inWork]: '?isPublished=false',
};
