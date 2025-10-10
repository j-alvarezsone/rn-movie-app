import { movieQueries } from '@/core/queries';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { isLoading, data } = useQuery(movieQueries.nowPlaying());
  const { isLoading: isLoadingPopular, data: popularMovies } = useQuery(movieQueries.popular());

  if (isLoading || isLoadingPopular) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='#2b7fff' size={40} />
      </View>
    );
  }

  return (
    <View style={{ paddingTop: safeArea.top }}>
      <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>
      <MainSlideShow movies={data ?? []} />
      {/* Poular */}
      <MovieHorizontalList title='Popular' movies={popularMovies ?? []} />
    </View>
  );
};
export default HomeScreen;
