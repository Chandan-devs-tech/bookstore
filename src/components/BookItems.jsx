import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/bookSlice';

const BookItems = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bookItemContainer">
      <div className="titleBtns">
        <div className="bookItemTitle">
          <p>{category}</p>
          <h2>{title}</h2>
          <p>{author}</p>
        </div>
        <div className="btnsContainer">
          <button type="button">Comment</button>
          <button type="button">Edit</button>
          <button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
        </div>
      </div>
      <div className="statusContainer">
        <FontAwesomeIcon icon={faCircleNotch} style={{ color: '#013CA2' }} />
        <div className="percentage">
          <p>65%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapterContainer">
        <p>Current Chapter</p>
        <p>Chapter 7</p>
        <button type="button">Update progress</button>
      </div>
    </div>
  );
};

BookItems.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItems;
