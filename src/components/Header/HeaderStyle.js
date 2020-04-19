import styled from 'styled-components';

export const Header = styled.header`
    background-color: white;
    width: 100%;
    height: 80px;
    margin: 0 auto;
    position: fixed;
    overflow: hidden;
    top: 0;
`;

export const ContainerHeder = styled.div`
    max-width: 1650px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Logo = styled.img`
    width: 90px;
    height: 70px;
`;

export const Navigacija = styled.nav`
    & a{
        color: black;
        text-decoration: none;
        margin: 8px;
        font-size: 20px;
    }

    a:active{
        color: yellow;
    }

    a:hover{
        color: yellow;
    }
`;