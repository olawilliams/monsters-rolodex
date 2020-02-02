import React from 'react';
import './searchbox-styles.css';

const SearchBox = (props) => {
    return (
        <div>
            <h1>Monster Rolodex</h1>
            <input className='search' type='search' placeholder='search monsters'
            onChange={props.onSearchChange}
            />
        </div>
    )
}

export default SearchBox;