import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/bookSlice';
import BookItems from './BookItems';

function BookList() {
  const booksData = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <div>
      {booksData ? booksData.map((item) => (
        <BookItems
          title={item.title}
          key={item.item_id}
          id={item.item_id}
          author={item.author}
          category={item.category}
        />
      )) : (
        <div>No books yet</div>
      )}
    </div>
  );
}

export default BookList;
