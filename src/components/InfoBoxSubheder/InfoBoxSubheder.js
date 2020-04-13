import React from 'react';
import '../InfoBoxSubheder/InfoBoxSubheder.scss';

const InfoBoxSubheder = (props) => {
    return(
        <div class="info-box__subheader">
            <div class="info-box__subheader__container">
                <img src={props.loacation} alt={props.alt1} class="info-box__subheader__container_sizeImege"/>
                <p class="info-box__subheader__text">{props.children1}</p>
            </div>
            <div class="info-box__subheader__container info-box__subheader__container_margin">
                <img src={props.time} alt={props.alt2} class="info-box__subheader__container_sizeImege"/>
                    <p class="info-box__subheader__text">{props.children2}</p>
                </div>
            </div>
    );
}

export default InfoBoxSubheder;