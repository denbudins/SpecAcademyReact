import React from 'react';
import {Link} from 'react-router-dom';
import LogoSlika from '../../assets/img/logo.png';
import {Header, ContainerHeder, Logo, Navigacija} from './HeaderStyle';

const links = {
    speakers: 'Speakers',
    events: 'Events',
}

const HeaderStranice = () => {
    return(
        <>
        <Header>
            <ContainerHeder>
                <Link to='/'>
                    <Logo src={LogoSlika} alt="Foi logo"></Logo>
                </Link>
                <Navigacija>
                    <Link to='/events'>{links.events}</Link>
                    <Link to='/speakers'>{links.speakers}</Link>
                </Navigacija>
            </ContainerHeder>
        </Header>
        </>
    );
}

export default HeaderStranice;