import React from 'react';
import {Link} from 'react-router-dom';
import '../Card/Card.scss';

const Card = (props) => {
    return(
        <div class="Card">
            <Link to={props.veza}><img src={props.image} alt={props.alt}/></Link>
            <h3>{props.children}</h3>
        </div>
    );
}

export default Card;