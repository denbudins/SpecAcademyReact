import React from 'react';
import InfoBoxHeaderSpeakers from '../InfoBoxHeaderSpeakers/InfoBoxHeaderSpeakers';
import InfoBoxSubheader from '../InfoBoxSubheder/InfoBoxSubheder';
import InfoBoxAbout from '../InfoBoxAbout/InfoBoxAbout';
import InfoBoxButton from '../InfoBoxButton/InfoBoxButton';
import Location from '../../assets/img/dogadaji/location-icon.png';
import Time from '../../assets/img/dogadaji/time-icon.png';
import '../InfoBox/InfoBox.scss';

const InfoBox = () => {
    return(
        <div class="info-box">
            <InfoBoxHeaderSpeakers/>
            <InfoBoxSubheader loacation={Location} alt1="Lokacija događaja" time={Time} alt2="Vrijeme događanja" children1="Dvorana D09" children2="24.3 u 13:45h"/>
            <InfoBoxAbout/>
            <InfoBoxButton/>
        </div>
    );
}

export default InfoBox;