import React from 'react';
import {Link} from 'react-router-dom';
import {Kartica, Slika ,Naslov} from './CardStyle';

const Card = (props) => {
    return(
        <Kartica>
            <Link to={props.veza}>
                <Slika src={props.image} alt={props.alt}></Slika>
            </Link>
            <Naslov>{props.children}</Naslov>
        </Kartica>
    );
}

export default Card;