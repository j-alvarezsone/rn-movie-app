import { router } from 'expo-router';
import { Image, Pressable } from 'react-native';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({ id, poster, smallPoster = false, className = '' }: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`} onPress={() => router.push(`/movie/${id}`)}>
      <Image
        className='shadow-lg rounded-2xl'
        style={{ width: smallPoster ? 85 : 150, height: smallPoster ? 130 : 250 }}
        source={{ uri: poster }}
        resizeMode='cover'
      />
    </Pressable>
  );
};
export default MoviePoster;
