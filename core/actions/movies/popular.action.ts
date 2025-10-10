import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/core/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/core/infrastructure/mappers/movie.mapper';

export const popularMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');

    return data.results.map(MovieMapper.fromTheMovieDBToMovie);
  } catch (error) {
    console.log(error);
    throw 'Cannot load popular movies';
  }
};
