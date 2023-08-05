import React from 'react';
import Input from './Input';
import BookList from './BookList';
import '../styles/BookItems.css';

const Books = () => (
  <div className="formListContainer">
    <BookList />
    <Input />
  </div>
);
export default Books;
