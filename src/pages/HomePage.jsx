import { MoviesGallery } from 'components/MoviesGallery';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies(1).then(data => setMovies(data.results));
  }, []);

  return (
    <>
      <MoviesGallery movies={movies} />
    </>
  );
}
