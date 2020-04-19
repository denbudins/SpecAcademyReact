import React from 'react';
import {SrchBarComponent} from './SearchBarStyle';

const SearchBar = (props) => {
    if(props.aktiva === true){
        return(
            <SrchBarComponent type="text" placeholder={props.search} onChange={(e) => props.onValueChange(e.target.value)}></SrchBarComponent>
        );
    }else{
        return(
            <SrchBarComponent type="text" placeholder={props.search} onChange={(e) => props.onValueChange(e.target.value)} disabled></SrchBarComponent>
        );
    }
}

export default SearchBar;