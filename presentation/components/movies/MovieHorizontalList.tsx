import { Movie } from '@/core/infrastructure/interfaces/movie.interface';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
      {title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <MoviePoster poster={item.poster} smallPoster />}
      />
    </View>
  );
};
export default MovieHorizontalList;
