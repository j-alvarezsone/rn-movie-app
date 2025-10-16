import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <>
      <View className='absolute z-50 top-14 left-3 elevation-lg'>
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons name='arrow-back' size={30} color='white' className='shadow' />
        </Pressable>
      </View>
      <View style={{ height: screenHeight * 0.7 }} className='shadow-xl shadow-black/20'>
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image source={{ uri: poster }} resizeMode='cover' className='flex-1' />
        </View>
      </View>
      <View className='mt-5 px-5'>
        <Text className='font-normal text-gray-500'>{originalTitle}</Text>
        <Text className='font-semibold text-2xl'>{title}</Text>
      </View>
    </>
  );
};
export default MovieHeader;
