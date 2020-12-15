import React, { Component } from  'react'
import BookmarksContext from '../BookmarksContext'
import config from '../config'
import './EditBookmark.css'

const Required = () => (
    <span className='EditBookmark__required'>*</span>
  )
  
export default class EditBookmark extends Component {
    static contextType = BookmarksContext


    render() {
    
        return(
            <section className='EditBookmark'>
                <h2>Edit bookmark</h2>
                <form>
                </form>
            </section>
        )
    }
}