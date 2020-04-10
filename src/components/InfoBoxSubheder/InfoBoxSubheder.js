import React from 'react';
import Location from '../../assets/img/dogadaji/location-icon.png';
import Time from '../../assets/img/dogadaji/time-icon.png';
import '../InfoBoxSubheder/InfoBoxSubheder.css';

const InfoBoxSubheder = () => {
    return(
        <div class="info-box__subheader">
            <div class="info-box__subheader__container">
                <img src={Location} alt="Lokacija događaja" class="info-box__subheader__container_sizeImege"/>
                <p class="info-box__subheader__text">Dvorana D09</p>
            </div>
            <div class="info-box__subheader__container info-box__subheader__container_margin">
                <img src={Time} alt="Vrijeme događanja" class="info-box__subheader__container_sizeImege"/>
                    <p class="info-box__subheader__text">24.3 u 13:45h</p>
                </div>
            </div>
    );
}

export default InfoBoxSubheder;