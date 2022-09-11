import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

export default function useFetchTrending() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies(1).then(data => setMovies(data.results));
  }, []);

  return { movies };
}
