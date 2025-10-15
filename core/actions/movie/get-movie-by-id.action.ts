import { movieApi } from '@/core/api/movie-api';
import { CompleteMovie } from '@/core/infrastructure/interfaces/movie.interface';
import { MovieDBMovieResponse } from '@/core/infrastructure/interfaces/moviedb-movie.response';
import { MovieMapper } from '@/core/infrastructure/mappers/movie.mapper';

export const getMovieByIdAction = async (id: number): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBMovieResponse>(`/${id}`);

    return MovieMapper.fromTheMovieDBToCompleteMovies(data);
  } catch (error) {
    console.log(error);
    throw 'Cannot load movie details';
  }
};
