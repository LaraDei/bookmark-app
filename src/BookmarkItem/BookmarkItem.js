import React from 'react';
import Rating from '../Rating/Rating';
import BookmarksContext from '../BookmarksContext';
import { Link } from 'react-router-dom';
import './BookmarkItem.css';
import PropTypes from 'prop-types'

export default function BookmarkItem(props) {

  return (
    <BookmarksContext.Consumer>
      {/*To get the value/context out of the consumer, we accept it as an argument*/}
      {(context) => (
        <li className='BookmarkItem'>
          <div className='BookmarkItem__row'>
            <h3 className='BookmarkItem__title'>
              <a
                href={props.url}
                target='_blank'
                rel='noopener noreferrer'>
                {props.title}
              </a>
            </h3>
            <Rating value={props.rating} />
          </div>
          <p className='BookmarkItem__description'>
            {props.description}
          </p>
          <div className='BookmarkItem__buttons'>
            <button
              className='BookmarkItem__description'
              onClick={() => {
                context.onClickDelete(props.id)
              }}
            >
              Delete
            </button>
            {' '}
            <button className='BookmarkItem__description'>
              <Link to={`/edit/${props.id}`}>
              Edit
              </Link>
            </button>
          </div>
        </li>
      )}
    </BookmarksContext.Consumer>
  )
}


BookmarkItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.number,
  description: PropTypes.string
};

BookmarkItem.defaultProps = {
  rating: 1,
  description: ""
}