import { useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

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
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Filter by name..."
          prefix={
            <SearchOutlined style={{ fontSize: '16px', color: '#808080' }} />
          }
          onChange={changeFilter}
          style={{
            display: 'flex',
            width: '1020px',
            height: '56px',
            padding: '16px',
            margin: '0 auto 60px',
            borderRadius: '8px',
            border: '1px solid #808080',
            color: '#808080',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        />
      </form>
    </>
  );
}
