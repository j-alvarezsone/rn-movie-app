import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/core/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/core/infrastructure/mappers/movie.mapper';

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing');

    return data.results.map(MovieMapper.fromTheMovieDBToMovie);
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
