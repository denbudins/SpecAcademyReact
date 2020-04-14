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
                    <h2 class="InfoBox-Header-Tekst InfoBox-Header-Tekst_margin">{props.naslov}</h2>
                </div>
                <div class="InfoBox-Subheader">
                    <div class="InfoBox-Subheader-Container">
                        <img src={Location} alt={props.alt1} class="InfoBox-Subheader-Container_sizeImege"/>
                        <p class="InfoBox-Subheader-Text">{props.children1}</p>
                    </div>
                    <div class="InfoBox-Subheader-Container InfoBox-Subheader-Container_margin">
                        <img src={Time} alt={props.alt2} class="InfoBox-Subheader-Container_sizeImege"/>
                        <p class="InfoBox-Subheader-Text">{props.children2}</p>
                    </div>
                </div>
                <div class="InfoBox-About">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a mauris eget urna tempor aliquam. Integer eu maximus velit, eu placerat augue. Sed elit nunc, euismod quis placerat vulputate, tempus sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget ipsum eget libero hendrerit auctor.</p>
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
                    <h2 class="InfoBox-Header-Tekst InfoBox-Header-Tekst_margin">{props.naslov}</h2>
                </div>
                <div class="InfoBox-About">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a mauris eget urna tempor aliquam. Integer eu maximus velit, eu placerat augue. Sed elit nunc, euismod quis placerat vulputate, tempus sit amet enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget ipsum eget libero hendrerit auctor.</p>
                </div>
                <div>
                    <a href="/" class="InfoBox-Prijava InfoBox-Prijava_fontSizeS"><p>Prijavi se na predavanje</p></a>
                </div>
            </div>
        )
    }
    
}

export default InfoBox;