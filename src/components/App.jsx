import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('./Reviews'));
const MovieSearch = lazy(() => import('pages/MovieSearch'));

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
