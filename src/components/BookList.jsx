import React from 'react';
import { useSelector } from 'react-redux';
import BookItems from './BookItems';

function BookList() {
  const booksData = useSelector((state) => state.book.books);
  return (
    <div>
      {booksData.map((book) => (
        <BookItems key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
