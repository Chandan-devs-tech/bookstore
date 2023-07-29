import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

function RemoveBtn({ bookId }) {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(bookId));
  };
  return (
    <button type="button" className="btn" onClick={handleRemoveBook}>
      Remove Book
    </button>
  );
}
RemoveBtn.propTypes = {
  bookId: PropTypes.string.isRequired,
};

export default RemoveBtn;
