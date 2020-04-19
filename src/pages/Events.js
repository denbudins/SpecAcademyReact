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

    const hendleSrche = (unos) => {
        return setEvents(events.filter(item =>
            item.title.toLowerCase().includes(unos.toLowerCase())))
    };
    return(
        <>
            <h1>Događanja</h1>
            {events === '' ? <SrchBar search="Search events.." onValueChange={hendleSrche} aktiva = {false}/> : <SrchBar search="Search events.." onValueChange={hendleSrche} aktiva = {true}/>}
            <InfoBoxSection>
                {events === '' ? <Loader/> : events.map((events, index) =>(
            <InfoBox
                key={index}
                type = {"event"}
                title={events.title}
                location={events.location}
                dateTime={events.dateTime}
                about={events.about}
            />
        ))}
            </InfoBoxSection>
        </>
    );
}

export default Events;