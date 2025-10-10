import { movieQueries } from '@/core/queries';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { isLoading, data } = useQuery(movieQueries.nowPlaying());

  if (isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color='#2b7fff' size={40} />
      </View>
    );
  }

  return (
    <View style={{ paddingTop: safeArea.top }}>
      <Text className='text-3xl font-bold px-4 mb-2'>HomeScreen</Text>
      <MainSlideShow movies={data ?? []} />
    </View>
  );
};
export default HomeScreen;
