import React from 'react';
import './SearchBox.css';

const SearchBox=({onInputChange})=>{
    return (
        <div className="search-container">
            <input //curly braces actually mean an expression in jsx
            onChange={(event)=>onInputChange(event.target.value)}//using this value we can actually see what the user is typing
            placeholder="Type Keywords" 
            className="search-input"/>
            </div>
    )
};
export default SearchBox;   