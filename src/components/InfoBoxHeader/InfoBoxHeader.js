import React from 'react';
import '../InfoBoxHeader/InfoBoxHeader.scss';

const InfoBoxHeader = (props) => {
    return(
        <div class="info-box__header">
            <div class={props.klasa}></div>
            <h2 class="info-box__tekst info-box__tekst_margin">{props.naslov}</h2>
        </div>
    );
}

export default InfoBoxHeader;