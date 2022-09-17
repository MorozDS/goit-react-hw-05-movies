import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/api';
import CastItem from 'components/CastItem';
import s from 'components/Cast/Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setmovieCast] = useState([]);

  useEffect(() => {
    fetchCredits(movieId).then(data => setmovieCast(data.cast));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {movieCast?.map(actor => (
        <li key={actor.id} className={s.item}>
          <CastItem {...actor} />
        </li>
      ))}
    </ul>
  );
}
