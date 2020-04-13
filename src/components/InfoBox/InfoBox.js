import React from 'react';
import InfoBoxHeader from '../InfoBoxHeader/InfoBoxHeader';
import InfoBoxSubheader from '../InfoBoxSubheder/InfoBoxSubheder';
import InfoBoxAbout from '../InfoBoxAbout/InfoBoxAbout';
import InfoBoxButton from '../InfoBoxButton/InfoBoxButton';
import Location from '../../assets/img/dogadaji/location-icon.png';
import Time from '../../assets/img/dogadaji/time-icon.png';
import '../InfoBox/InfoBox.scss';

const InfoBox = (props) => {
    return(
        <div class="info-box">
            <InfoBoxHeader naslov={props.hedling} klasa={props.klasa}/>
            <InfoBoxSubheader loacation={Location} alt1="Lokacija događaja" time={Time} alt2="Vrijeme događanja" children1={props.mjesto} children2={props.vrijeme}/>
            <InfoBoxAbout/>
            <InfoBoxButton/>
        </div>
    );
}

export default InfoBox;