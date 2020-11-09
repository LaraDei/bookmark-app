import React, { Component } from 'react';
import BookmarksContext from '../BookmarksContext';
import BookmarkItem from '../BookmarkItem/BookmarkItem';
import './BookmarkList.css'

class BookmarkList extends Component {
  /* With the context imported, we can attach it to our class component. 
  We can assign our context to a static property called contextType, 
  this will give us a new instance property this.context
  */
  static contextType = BookmarksContext;
 
  render() {
    
    const { bookmarks } = this.context
    //console.log({bookmarks})
    //console.log(this)
    return (
      <section className='BookmarkList'>
        <h2>Your bookmarks</h2>
        <ul className='BookmarkList__list' aria-live='polite'>
          {bookmarks.map(bookmark =>
            <BookmarkItem
              key={bookmark.id}
              {...bookmark}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default BookmarkList;
