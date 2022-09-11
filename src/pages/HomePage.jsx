import { MoviesGallery } from 'components/MoviesGallery';
import useFetchTrending from 'hooks/useFetchTrending';

export default function HomePage() {
  const { movies } = useFetchTrending();

  return (
    <>
      <MoviesGallery movies={movies} />
    </>
  );
}
