import { movieQuery } from '@/core/queries/movieQuery';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { isLoading, data } = useQuery(movieQuery.details(Number(id)));

  if (isLoading) {
    return (
      <View className='flex flex-1 justify-center items-center'>
        <Text className='mb-4 text-gray-500'>Loading...</Text>
        <ActivityIndicator color='#2b7fff' size={30} />
      </View>
    );
  }
  return (
    <ScrollView>
      <Text>{data?.title}</Text>
    </ScrollView>
  );
};
export default MovieScreen;
