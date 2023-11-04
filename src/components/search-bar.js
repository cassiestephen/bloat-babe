import React, { useState, useEffect } from 'react';


// create a component 
const SearchBar = ({placeHolder, isSearching}) => {
    return(
        <form>
            <div className="search-bar">
                <input className="input-search" type="text" placeholder={placeHolder} onChange={isSearching}/>
                <button className='button-search' type="button"> 
                    &#128269;
                </button> 
            </div>
            </form>

    );
}

export default SearchBar;