import { Link } from 'react-router-dom';
import s from 'components/MovieCard/MovieCard.module.css';
import BackButton from 'components/Button/BackButton';
import PropTypes from 'prop-types';

export default function MovieCard({ movie }) {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <>
      <BackButton />
      <div className={s.card}>
        <img
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={`${title} Poster`}
        />

        <div>
          <h2>
            {title} (
            {release_date
              ? release_date.slice(0, 4)
              : 'No Release Year Available'}
            )
          </h2>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview ? overview : 'No Overview Available'}</p>
          <h3>Genres</h3>
          <p> {genres?.map(g => g.name).join(',')}</p>
        </div>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={'cast'} replace={true}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'} replace={true}>
            Reviews
          </Link>
        </li>
      </ul>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};
