import React from 'react';
import InfoBoxHeader from '../InfoBoxHeader/InfoBoxHeader';
import InfoBoxSubheader from '../InfoBoxSubheder/InfoBoxSubheder';
import InfoBoxAbout from '../InfoBoxAbout/InfoBoxAbout';
import InfoBoxButton from '../InfoBoxButton/InfoBoxButton';
import '../InfoBox/InfoBox.css';

const InfoBox = () => {
    return(
        <div class="info-box">
            <InfoBoxHeader/>
            <InfoBoxSubheader/>
            <InfoBoxAbout/>
            <InfoBoxButton/>
        </div>
    );
}

export default InfoBox;