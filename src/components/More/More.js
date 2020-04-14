import React from 'react';
import About from '../../assets/img/about.jpg';
import Spekers from '../../assets/img/speakers.jpg';
import Calendar from '../../assets/img/calendar.jpg';
import Partner from '../../assets/img/partner.jpg';
import Card from '../Card/Card'
import '../More/More.scss';

const More = () => {
    return(
        <section class="More">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit felis, accumsan eu venenatis sit amet, sollicitudin nec libero. Duis varius libero a turpis ornare dignissim. In et ante id neque aliquam tincidunt quis vitae urna. Etiam facilisis velit turpis, rutrum ullamcorper tortor ullamcorper ac. Maecenas tristique libero eros, quis accumsan mauris dapibus eget. Quisque convallis libero id velit rhoncus mollis. Cras congue justo tellus, ut hendrerit magna interdum at. Nullam tincidunt vulputate bibendum. Duis ornare lacus commodo, auctor sapien quis, dictum velit. Nunc quis pellentesque justo, id scelerisque felis. Maecenas vestibulum eget diam sit amet accumsan. Suspendisse elementum quis nisi at luctus.</p>
            <button class="More-Gumb">Saznaj više</button>
            <div class="More-CardContainer">
                <Card image={About} alt="About">O tjednu karijera</Card>
                <Card veza={'/speakers'} image={Spekers} alt="Spekers">Izlagači</Card>
                <Card veza={'/events'} image={Calendar} alt="Calendar">Raspored događanja</Card>
                <Card image={Partner} alt="Partner">Partneri</Card>
            </div>
        </section>
    );
}

export default More;