import React, { useState, useEffect  } from 'react';

import InfoBoxSection from '../components/InfoBoxSection/InfoBoxSection';
import InfoBox from '../components/InfoBox/InfoBox';
import speakersMocks from '../lib/speakers';
import Loader from '../components/Loader/LoaderSpiner';
import SrchBar from '../components/SearchBar/SearchBar';

const Speakers = () => {
    const [speakers, setSpeakers] = useState('');

    useEffect(() => {
        setTimeout(()=>{
            setSpeakers(speakersMocks);
        }, 1000);
    });

    const showSpeakers = () => {
        return speakers.map((speakers, index) =>(
            <InfoBox
                key={index}
                klasa={"InfoBox-Header-Icon InfoBox-Header-Icon_speakers"}
                title={speakers.title}
                about={speakers.about}
            />
        ));
    }

    return(
        <>
            <h1>Sudionici</h1>
            <SrchBar search="Search speakers.."/>
            <InfoBoxSection> 
                {speakers === '' ? <Loader/> : showSpeakers()}
            </InfoBoxSection> 
        </>
    );
}

export default Speakers;