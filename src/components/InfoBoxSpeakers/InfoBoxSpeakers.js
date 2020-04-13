import React from 'react';
import InfoBoxHeader from '../InfoBoxHeader/InfoBoxHeader';
import InfoBoxAbout from '../InfoBoxAbout/InfoBoxAbout';
import InfoBoxButton from '../InfoBoxButton/InfoBoxButton';
import '../InfoBox/InfoBox.scss';

const InfoBoxSpeakers = (props) => {
    return(
        <div class="info-box">
            <InfoBoxHeader naslov={props.hedling} klasa={props.klasa}/>
            <InfoBoxAbout/>
            <InfoBoxButton/>
        </div>
    );
}

export default InfoBoxSpeakers;