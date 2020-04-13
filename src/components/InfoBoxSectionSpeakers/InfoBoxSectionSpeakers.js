import React from 'react';
import InfoBox from '../InfoBoxSpeakers/InfoBoxSpeakers';
import '../InfoBoxSection/InfoBoxSection.scss';

const InfoBoxSectionSpeakers = () => {
    return(
        <section class="section-box section-box_margin">
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Bach"} klasa={"info-box__header__icon_speakers"}/>
            <InfoBox hedling={"Johan Sebastian Bach"} klasa={"info-box__header__icon_speakers"}/>
        </section>
    );
}

export default InfoBoxSectionSpeakers;