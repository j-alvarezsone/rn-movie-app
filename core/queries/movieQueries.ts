import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/actions/movies/popular.action';
import { queryOptions } from '@tanstack/react-query';

export const movieQueries = {
  nowPlaying: () =>
    queryOptions({
      queryKey: ['movies', 'nowPlaying'],
      queryFn: nowPlayingAction,
      staleTime: 1000 * 60 * 5,
    }),

  popular: () =>
    queryOptions({
      queryKey: ['movies', 'popular'],
      queryFn: popularMoviesAction,
      staleTime: 1000 * 60 * 5,
    }),
};
