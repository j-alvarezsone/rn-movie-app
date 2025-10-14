import { movieQueries } from '@/core/queries';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { isLoading, data } = useQuery(movieQueries.nowPlaying());
  const { isLoading: isLoadingPopular, data: popularMovies } = useQuery(movieQueries.popular());
  const {
    isLoading: isLoadingTopRated,
    data: topRatedMovies,
    fetchNextPage: topRatedMoviesFetchNextPage,
  } = useInfiniteQuery(movieQueries.topRated());
  const {
    isLoading: isLoadingUpcoming,
    data: upcomingMovies,
    fetchNextPage: upcomingMoviesFetchNextPage,
  } = useInfiniteQuery(movieQueries.upcoming());

  if (isLoading || isLoadingPopular || isLoadingTopRated || isLoadingUpcoming) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='#2b7fff' size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className='pb-10' style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>
        <MainSlideShow movies={data ?? []} />
        {/* Poular */}
        <MovieHorizontalList className='mb-5' title='Popular' movies={popularMovies ?? []} />
        {/* Top Rated */}
        <MovieHorizontalList
          className='mb-5'
          title='Top Rated'
          movies={topRatedMovies?.pages.flat() ?? []}
          loadNextPage={topRatedMoviesFetchNextPage}
        />
        {/* Upcoming */}
        <MovieHorizontalList
          className='mb-5'
          title='Upcoming'
          movies={upcomingMovies?.pages.flat() ?? []}
          loadNextPage={upcomingMoviesFetchNextPage}
        />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
