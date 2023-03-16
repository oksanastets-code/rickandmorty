import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (filter.trim() === '') {
      return;
    }
    onSubmit(filter);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Filter by name..."
          onChange={changeFilter}
        />
      </form>
    </>
  );
}
