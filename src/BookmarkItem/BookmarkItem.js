import React from 'react';
import Rating from '../Rating/Rating';
import BookmarksContext from '../BookmarksContext';
import { Link } from 'react-router-dom';
import './BookmarkItem.css';
import PropTypes from 'prop-types'
import config from '../config';

function deleteBookmarkRequest(bookmarkId, cb) {
  fetch(config.API_ENDPOINT + `/${bookmarkId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'authorization': `bearer ${config.API_KEY}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(data => {
      cb(bookmarkId)
    })
    .catch(error => {
      console.error(error)
    })
}

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
          <button className='Bookmark-button'>
              <Link to={`/edit/${props.id}`}>
              Edit
              </Link>
            </button>
            {' '}
            <button
              className='BookmarkItem__description'
              onClick={() => {
                deleteBookmarkRequest(props.id, context.deleteBookmark)
              }}
            >
              Delete
            </button>
            {' '}
          </div>
        </li>
      )}
    </BookmarksContext.Consumer>
  )
}


BookmarkItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  rating: PropTypes.number,
  description: PropTypes.string
};

BookmarkItem.defaultProps = {
  rating: 1,
  description: ""
}