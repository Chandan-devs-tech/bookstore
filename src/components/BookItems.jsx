import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import RemoveBtn from './RemoveButton';

const BookItems = ({ book }) => (
  <div className="bookItemContainer">
    <div className="titleBtns">
      <div className="bookItemTitle">
        <p>Category</p>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <div className="btnsContainer">
        <button type="button">Comment</button>
        <button type="button">Edit</button>
        <RemoveBtn bookId={book.id} />
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

BookItems.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItems;
