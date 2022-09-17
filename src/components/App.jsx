import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage';
import Cast from 'components/Cast/Cast';
import Reviews from './Reviews';
import { SharedLayout } from 'components/SharedLayout';
import MovieSearch from 'pages/MovieSearch';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MovieSearch />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
