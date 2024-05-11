import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query');
    setSearchQuery(queryParam || '');
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    setSearchQuery('');
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
