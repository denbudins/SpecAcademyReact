import React from 'react';
import '../Card/Card.scss';

const Card = (props) => {
    return(
        <div class="card">
            <img src={props.image} alt={props.alt}/>
            <h3>{props.children}</h3>
        </div>
    );
}

export default Card;