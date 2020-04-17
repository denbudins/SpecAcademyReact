import React from 'react';
import {SrchBarComponent} from './SearchBarStyle';

const SearchBar = (props) => {
    return(
        <SrchBarComponent type="text" placeholder={props.search}></SrchBarComponent>
    );
}

export default SearchBar;