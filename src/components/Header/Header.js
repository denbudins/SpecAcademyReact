import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import LogoSlika from '../../assets/img/logo.png';
import {Header, ContainerHeder, Logo, Navigacija} from './HeaderStyle';

const links = {
    speakers: 'Speakers',
    events: 'Events',
    register: 'Register',
    login: 'Login',
    logout: 'Logout',
}

const HeaderStranice = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('token') !== null){
            setIsAuth(true);
        }else{
            setIsAuth(false);
        }
    }, [isAuth]);
    
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
                    {!isAuth &&
                        <>
                            <Link to='/register'>{links.register}</Link>
                            <Link to='/login'>{links.login}</Link>
                        </> 
                    }
                    {isAuth && <Link onClick={handleLogout}>{links.login}</Link>}
                </Navigacija>
            </ContainerHeder>
        </Header>
        </>
    );
}

export default HeaderStranice;