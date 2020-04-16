import React from 'react';
import '../InfoBoxSection/InfoBoxSection.scss';

const InfoBoxSection = (props) => {
    return(
        <section class="SectionBox SectionBox_margin">
            {props.children}
        </section>
    );
}

export default InfoBoxSection;