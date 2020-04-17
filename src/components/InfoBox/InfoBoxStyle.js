import styled from 'styled-components';

export const InfoBoxMain = styled.div`
    background: #efefef;
    padding: 15px;
    border-radius: 10px;
    margin-top: 15px;
    margin-bottom: 15px;

    @media screen and (min-width: 767px){
        margin-left: 30px;
    }

    @media screen and (min-width: 1024px){
        margin-left: 30px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Naslov = styled.h2`
    margin-left: 15px;
`;

export const Tekst = styled.p`
    margin-left: 15px;
`;

export const Subheader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

export const Icon = styled.img`
    width: 50px;
    height: 40px;
`;

export const About = styled.p`
    text-align: center;
    font-size: 20px;
`;

export const Prijava = styled.a`
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 25px;
`;

export const HeaderIcon = styled.div`
    width: 50px;
    height: 40px;
    background-image: url(${props => props.iconUrl});
`;