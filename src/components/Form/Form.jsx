import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from 'components/Form/Form.module.css';

export default function Form({ onSearchClick }) {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(() =>
    searchParams.get('query') ? searchParams.get('query') : ''
  );

  const onChange = event => {
    setSearchQuery(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '')
      return toast.warning('Enter search query text!');
    onSearchClick(searchQuery);
  };

  return (
    <div className={s.formblock}>
      <form onSubmit={onSubmit} className={s.form}>
        <button type="submit" className={s.button}>
          <span>Search</span>
        </button>
        <input
          className={s.input}
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onChange}
          value={searchQuery}
        />
      </form>
    </div>
  );
}
Form.propTypes = {
  onSearchClick: PropTypes.func.isRequired,
};
