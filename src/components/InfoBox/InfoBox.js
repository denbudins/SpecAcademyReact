import React from 'react';
import Location from '../../assets/img/dogadaji/location-icon.png';
import Time from '../../assets/img/dogadaji/time-icon.png';
import '../InfoBox/InfoBox.scss';

const InfoBox = (props) => {
    if (props.klasa === "InfoBox-Header-Icon InfoBox-Header-Icon_events"){
        return(
            <div class="InfoBox">
                <div class="InfoBox-Header">
                    <div class={props.klasa}></div>
                    <h2 class="InfoBox-Header-Tekst InfoBox-Header-Tekst_margin">{props.title}</h2>
                </div>
                <div class="InfoBox-Subheader">
                    <div class="InfoBox-Subheader-Container">
                        <img src={Location} alt="Lokacija događaja" class="InfoBox-Subheader-Container_sizeImege"/>
                        <p class="InfoBox-Subheader-Text">{props.location}</p>
                    </div>
                    <div class="InfoBox-Subheader-Container InfoBox-Subheader-Container_margin">
                        <img src={Time} alt="Datum i vrijeme događaja" class="InfoBox-Subheader-Container_sizeImege"/>
                        <p class="InfoBox-Subheader-Text">{props.dateTime}</p>
                    </div>
                </div>
                <div class="InfoBox-About">
                    <p>{props.about}</p>
                </div>
                <div>
                    <a href="/" class="InfoBox-Prijava InfoBox-Prijava_fontSizeS"><p>Prijavi se na predavanje</p></a>
                </div>
            </div>
        )
    }else if(props.klasa === "InfoBox-Header-Icon InfoBox-Header-Icon_speakers"){
        return(
            <div class="InfoBox">
                <div class="InfoBox-Header">
                    <div class={props.klasa}></div>
                    <h2 class="InfoBox-Header-Tekst InfoBox-Header-Tekst_margin">{props.title}</h2>
                </div>
                <div class="InfoBox-About">
                    <p>{props.about}</p>
                </div>
                <div>
                    <a href="/" class="InfoBox-Prijava InfoBox-Prijava_fontSizeS"><p>Prijavi se na predavanje</p></a>
                </div>
            </div>
        )
    }
    
}

export default InfoBox;