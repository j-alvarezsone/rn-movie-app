import { Movie } from '@/core/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className='h-[15.625rem] w-full'>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => <MoviePoster poster={item.poster} />}
        width={200}
        height={350}
        style={{ width, height: 350, justifyContent: 'center', alignContent: 'center' }}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  );
};
export default MainSlideShow;
