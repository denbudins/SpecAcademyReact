import React, {useContext}  from 'react';
import {Link} from 'react-router-dom';
import LogoSlika from '../../assets/img/logo.png';
import {Header, ContainerHeder, Logo, Navigacija} from './HeaderStyle';
import {AuthContext} from "../../context/AuthContext";

const links = {
    speakers: 'Speakers',
    events: 'Events',
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
}

const HeaderStranice = (props) => {
    const isLoggedIn = useContext(AuthContext);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
    }

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
                        {isLoggedIn ?
                            <Link onClick={handleLogout}>{links.logout}</Link>
                            :
                            <>
                                <Link to='/register'>{links.register}</Link>
                                <Link to='/login'>{links.login}</Link>
                            </> 
                        }
                </Navigacija>
            </ContainerHeder>
        </Header>
        </>
    );
}

export default HeaderStranice;