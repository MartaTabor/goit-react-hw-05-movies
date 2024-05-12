import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchBox.module.css';

export const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query');
    setSearchQuery(queryParam || '');
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Please enter a search phrase!');
    } else {
      setSearchParams({ query: searchQuery });
      setSearchQuery('');
    }
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          placeholder="Search Movie"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
