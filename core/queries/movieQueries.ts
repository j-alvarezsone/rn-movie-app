import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/actions/movies/popular.action';
import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
import { topRatedMoviesAction } from '../actions/movies/topRated.action';
import { upcomingMoviesAction } from '../actions/movies/upcoming.action.ts';

// Helper function for pagination logic
const getNextPageParam = <T>(lastPage: T[], allPages: T[][]) => {
  if (lastPage.length === 0) return undefined;

  return allPages.length + 1;
};

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
    infiniteQueryOptions({
      queryKey: ['movies', 'topRated'],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => topRatedMoviesAction({ page: pageParam }),
      getNextPageParam,
      staleTime: 1000 * 60 * 5,
    }),
  upcoming: () =>
    infiniteQueryOptions({
      queryKey: ['movies', 'upcoming'],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => upcomingMoviesAction({ page: pageParam }),
      getNextPageParam,
      staleTime: 1000 * 60 * 5,
    }),
};
