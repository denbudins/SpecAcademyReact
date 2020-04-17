import React from 'react';
import {Section} from './InfoBoxSectionStyle';

const InfoBoxSection = (props) => {
    return(
        <Section>{props.children}</Section>
    );
}

export default InfoBoxSection;