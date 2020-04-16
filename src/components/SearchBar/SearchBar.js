import React from 'react';
import '../SearchBar/SearchBar.scss';

const SearchBar = (props) => {
    return(
        <div>
            <input type="text" className="SearchBar" placeholder={props.search}></input>
        </div>
    );
}

export default SearchBar;