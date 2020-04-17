import React from 'react';
import Location from '../../assets/img/dogadaji/location-icon.png';
import Time from '../../assets/img/dogadaji/time-icon.png';
import {InfoBoxMain, Header, Tekst, Subheader, Container, Icon, About, Prijava, Naslov, HeaderIcon} from './InfoBoxStyle';
import IconUrlSpeakers from '../../assets/img/dogadaji/speakers-icon.png';
import IconUrlEvents from '../../assets/img/dogadaji/event-icon.png';

const InfoBox = (props) => {
    if (props.type === "event"){
        return(
            <InfoBoxMain>
                <Header>
                    <HeaderIcon iconUrl={IconUrlEvents}></HeaderIcon>
                    <Naslov>{props.title}</Naslov>
                </Header>
                <Subheader>
                    <Container>
                        <Icon src={Location} alt="Lokacija događaja"></Icon>
                        <Tekst>{props.location}</Tekst>
                    </Container>
                    <Container>
                        <Icon src={Time} alt="Datum i vrijeme događaja"></Icon>
                        <Tekst>{props.dateTime}</Tekst>
                    </Container>
                </Subheader>
                <About>{props.about}</About>
                <Prijava href="/">Prijavi se na predavanje</Prijava>
            </InfoBoxMain>
        )
    }else if(props.type === "speakers"){
        return(
            <InfoBoxMain>
                <Header>
                    <HeaderIcon iconUrl={IconUrlSpeakers}></HeaderIcon>
                    <Naslov>{props.title}</Naslov>
                </Header>
                <About>{props.about}</About>
                <Prijava href="/">Prati predavača</Prijava>
            </InfoBoxMain>
        )
    }
    
}

export default InfoBox;