import React from 'react'
import Title from './Title'
import {FaSearch} from 'react-icons/fa'
function HeadingSearch() {
    return (
        <div className="headind_srch">
        <div className="recent_heading">
          <Title title='Recent' />
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <input type="text" className="search-bar" placeholder="Search" />
            <span className="input-group-addon">
            <button type="button"><FaSearch /></button>
            </span> </div>
        </div>
      </div>
    )
}

export default HeadingSearch
