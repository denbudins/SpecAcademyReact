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
                type = {"speakers"}
                title={speakers.title}
                about={speakers.about}
            />
        ));
    }

    return(
        <>
            <h1>Sudionici</h1>
            {speakers === '' ? <SrchBar search="Search speakers.." /*onValueChange={hendleSrche}*/ aktiva = {false}/> : <SrchBar search="Search speakers.." /*onValueChange={hendleSrche}*/ aktiva = {true}/>}
            <InfoBoxSection> 
                {speakers === '' ? <Loader/> : showSpeakers()}
            </InfoBoxSection> 
        </>
    );
}

export default Speakers;