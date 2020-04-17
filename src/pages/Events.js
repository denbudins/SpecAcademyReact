import React, { useState, useEffect  } from 'react';

import InfoBoxSection from '../components/InfoBoxSection/InfoBoxSection';
import InfoBox from '../components/InfoBox/InfoBox';
import eventsMocks from '../lib/events';
import Loader from '../components/Loader/LoaderSpiner';
import SrchBar from '../components/SearchBar/SearchBar';

const Events = () => {
    const [events, setEvents] = useState('');

    useEffect(() => {
        setTimeout(()=>{
            setEvents(eventsMocks);
        }, 1000);
    });

    const showEvents = () => {
        return events.map((events, index) =>(
            <InfoBox
                key={index}
                type = {"event"}
                title={events.title}
                location={events.location}
                dateTime={events.dateTime}
                about={events.about}
            />
        ));
    }
    return(
        <>
            <h1>Događanja</h1>
            <SrchBar search="Search events.."/>
            <InfoBoxSection>
                {events === '' ? <Loader/> : showEvents()}
            </InfoBoxSection>
        </>
    );
}

export default Events;