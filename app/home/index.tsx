import { useMovies } from '@/presentation/hooks/useMovies';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  const { data } = useMovies();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
export default HomeScreen;
