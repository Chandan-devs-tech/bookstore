import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import BookItems from './BookItems';
import Input from './Input';
import BookList from './BookList';
import '../styles/BookItems.css';

const Books = () => (
  <div>
    <BookList />
    <Input />
  </div>
);
export default Books;
