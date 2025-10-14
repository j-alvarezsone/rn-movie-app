import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/core/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/core/infrastructure/mappers/movie.mapper';

interface Options {
  page?: number;
  limit?: number;
}

export const upcomingMoviesAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming', {
      params: {
        page,
        limit,
      },
    });

    return data.results.map(MovieMapper.fromTheMovieDBToMovie);
  } catch (error) {
    console.log(error);
    throw 'Cannot load upcoming movies';
  }
};
