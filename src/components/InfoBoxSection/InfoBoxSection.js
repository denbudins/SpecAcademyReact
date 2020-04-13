import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import '../InfoBoxSection/InfoBoxSection.scss';

const InfoBoxSection = () => {
    return(
        <section class="section-box section-box_margin">
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D09"} vrijeme={"24.3 u 13:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D10"} vrijeme={"24.3 u 14:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D09"} vrijeme={"24.3 u 14:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D11"} vrijeme={"24.3 u 15:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D12"} vrijeme={"24.3 u 13:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D15"} vrijeme={"24.3 u 13:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D09"} vrijeme={"24.3 u 18:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D10"} vrijeme={"24.3 u 13:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D15"} vrijeme={"24.3 u 13:45h"} klasa={"info-box__header__icon_events"}/>
            <InfoBox hedling={"How can we benefit from React"} mjesto={"Dvorana D09"} vrijeme={"24.3 u 17:45h"} klasa={"info-box__header__icon_events"}/>
        </section>
    );
}

export default InfoBoxSection;