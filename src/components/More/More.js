import React from 'react';
import About from '../../assets/img/about.jpg';
import Spekers from '../../assets/img/speakers.jpg';
import Calendar from '../../assets/img/calendar.jpg';
import Partner from '../../assets/img/partner.jpg';
import Card from '../Card/Card'
import {Section, Tekst, CardContainer, Gumb} from './MoreStyle';

const More = () => {
    return(
        <Section>
            <Tekst>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec elit felis, accumsan eu venenatis sit amet, sollicitudin nec libero. 
            Duis varius libero a turpis ornare dignissim.
            In et ante id neque aliquam tincidunt quis vitae urna. 
            Etiam facilisis velit turpis, rutrum ullamcorper tortor ullamcorper ac. 
            Maecenas tristique libero eros, quis accumsan mauris dapibus eget. 
            Quisque convallis libero id velit rhoncus mollis. 
            Cras congue justo tellus, ut hendrerit magna interdum at. 
            Nullam tincidunt vulputate bibendum. Duis ornare lacus commodo, auctor sapien quis, dictum velit. 
            Nunc quis pellentesque justo, id scelerisque felis. Maecenas vestibulum eget diam sit amet accumsan. 
            Suspendisse elementum quis nisi at luctus.
            </Tekst>
            <Gumb>Saznaj više</Gumb>
            <CardContainer>
                <Card image={About} alt="About">O tjednu karijera</Card>
                <Card veza={'/speakers'} image={Spekers} alt="Spekers">Izlagači</Card>
                <Card veza={'/events'} image={Calendar} alt="Calendar">Raspored događanja</Card>
                <Card image={Partner} alt="Partner">Partneri</Card>
            </CardContainer>
        </Section>
    );
}

export default More;