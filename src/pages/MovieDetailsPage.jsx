import MovieCard from 'components/MovieCard/MovieCard';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDetailsMovie } from 'services/api';
import { Outlet } from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(movieId) || movieId.length > 6) {
      navigate('/');
    } else {
      fetchDetailsMovie(movieId).then(setMovie);
    }
  }, [movieId, navigate]);

  return (
    <>
      <MovieCard movie={movie} />
      <Outlet />
    </>
  );
}
