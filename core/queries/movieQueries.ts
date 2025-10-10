import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/actions/movies/popular.action';
import { queryOptions } from '@tanstack/react-query';
import { topRatedMoviesAction } from '../actions/movies/topRated.action';
import { upcomingMoviesAction } from '../actions/movies/upcoming.action.ts';

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
  topRated: () =>
    queryOptions({
      queryKey: ['movies', 'topRated'],
      queryFn: topRatedMoviesAction,
      staleTime: 1000 * 60 * 5,
    }),
  upcoming: () =>
    queryOptions({
      queryKey: ['movies', 'upcoming'],
      queryFn: upcomingMoviesAction,
      staleTime: 1000 * 60 * 5,
    }),
};
