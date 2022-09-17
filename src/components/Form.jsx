import { useState } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

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
    <div>
      <form onSubmit={onSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
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
