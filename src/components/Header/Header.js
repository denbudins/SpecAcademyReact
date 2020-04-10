import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import '../Header/Header.css';

const links = {
    speakers: 'Speakers',
    events: 'Events',
}

const Header = () => {
    return(
        <header>
            <div class="containerHeder">
                <Link to='/'>
                    <img src={Logo} alt="FOI logo" class="logo"/>
                </Link>
                <nav class="navigacija">
                    <Link to='/events'>{links.events}</Link>
                    <Link to='/speakers'>{links.speakers}</Link>
                </nav>  
            </div>
        </header>
    );
}

export default Header;