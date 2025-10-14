import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { popularMoviesAction } from '@/core/actions/movies/popular.action';
import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query';
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
    infiniteQueryOptions({
      queryKey: ['movies', 'topRated'],
      initialPageParam: 1,
      queryFn: ({ pageParam }) => topRatedMoviesAction({ page: pageParam }),
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length === 0) return;
        return allPages.length + 1;
      },
      staleTime: 1000 * 60 * 5,
    }),
  upcoming: () =>
    queryOptions({
      queryKey: ['movies', 'upcoming'],
      queryFn: upcomingMoviesAction,
      staleTime: 1000 * 60 * 5,
    }),
};
