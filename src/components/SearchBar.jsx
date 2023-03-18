import { useState } from 'react';

import styled from 'styled-components';

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
      <Form action="" onSubmit={handleSubmit}>
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
            width: '100%',
            height: '56px',
            padding: '16px',
            margin: '0 auto',
            borderRadius: '8px',
            border: '1px solid #808080',
            color: '#808080',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        />
      </Form>
    </>
  );
}
const Form = styled.form`
  width: 312px;
  margin: 0 auto 32px;

  @media screen and (min-width: 481px) {
    width: 1020px;
    margin-bottom: 60px;
  }
`;
