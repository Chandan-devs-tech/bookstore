import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BookItems from './BookItems';
import Input from './Input';
import '../styles/BookItems.css';

const Books = () => {
  // Assuming you have an array of book data called "booksData"
  const booksData = [
    { id: uuidv4(), title: 'Book 1', author: 'Author 1' },
    { id: uuidv4(), title: 'Book 2', author: 'Author 2' },
    { id: uuidv4(), title: 'Book 3', author: 'Author 3' },
  ];

  return (
    <div>
      {booksData.map((book) => (
        <BookItems key={book.id} book={book} />
      ))}
      <Input />
    </div>
  );
};

export default Books;
