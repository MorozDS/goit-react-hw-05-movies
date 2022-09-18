import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from 'components/Form/Form';
import { fetchSearchQuery } from 'services/api';
import { MoviesGallery } from 'components/MoviesGallery';
import BackButton from 'components/Button/BackButton';

export default function MovieSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchParams.get('query')) return;

    fetchSearchQuery(searchParams.get('query')).then(data => {
      if (data.total_results === 0) {
        return toast.error('Found 0 movies! Please, change search query');
      } else {
        setMovies(data.results);
      }
    });
  }, [searchParams]);

  function onSearchClick(searchQuery) {
    if (searchParams.get('query')) {
      if (searchParams.get('query').toLowerCase() === searchQuery.toLowerCase())
        return;
    }
    setMovies([]);
    setSearchParams({
      query: searchQuery,
      page: 1,
    });
  }

  return (
    <>
      <BackButton />
      <Form onSearchClick={onSearchClick} />
      <MoviesGallery movies={movies} />
    </>
  );
}
