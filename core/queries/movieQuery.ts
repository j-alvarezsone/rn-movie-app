import { queryOptions } from '@tanstack/react-query';
import { getMovieByIdAction } from '../actions/movie/get-movie-by-id.action';

export const movieQuery = {
  details: (id: number) =>
    queryOptions({
      queryKey: ['movie', id],
      queryFn: () => getMovieByIdAction(id),
      staleTime: 1000 * 60 * 5,
    }),
};
