import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import '../InfoBoxSection/InfoBoxSection.scss';

const InfoBoxSection = (props) => {
    return(
        <section class="SectionBox SectionBox_margin">
            <InfoBox naslov={props.naslov} children1={"Dvorana D09"} children2={"24.3 u 13:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D10"} children2={"24.3 u 14:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D09"} children2={"24.3 u 14:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D11"} children2={"24.3 u 15:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D12"} children2={"24.3 u 13:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D15"} children2={"24.3 u 13:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D09"} children2={"24.3 u 18:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D10"} children2={"24.3 u 13:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D15"} children2={"24.3 u 13:45h"} klasa={props.klasa}/>
            <InfoBox naslov={props.naslov} children1={"Dvorana D09"} children2={"24.3 u 17:45h"} klasa={props.klasa}/>
        </section>
    );
}

export default InfoBoxSection;