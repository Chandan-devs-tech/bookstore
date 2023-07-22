import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import '../styles/BookItems.css';

const BookItems = () => (
  <div className="bookItemContainer">
    <div className="titleBtns">
      <div className="bookItemTitle">
        <p>Category</p>
        <h2>Book Title</h2>
        <p>Author</p>
      </div>
      <div className="btnsContainer">
        <button type="button">Comment</button>
        <button type="button">Edit</button>
        <button type="button">Remove</button>
      </div>
    </div>
    <div className="statusContainer">
      <FontAwesomeIcon icon={faCircleNotch} style={{ color: '#013ca2' }} />
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

export default BookItems;
