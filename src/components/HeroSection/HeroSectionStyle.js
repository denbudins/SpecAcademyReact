import styled from 'styled-components';
import slika from '../../assets/img/event.jpg';

export const Section = styled.section`
    background-image: url(${slika});
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    margin-top: 50px;
`;

export const Container = styled.div`
    width: calc(100% - 75%);
        height: calc(100% - 30%);
        background-color: rgba(255, 255, 255, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: auto;
        flex-direction: column;
        border-radius: 15px;
        padding: 20px;
`;

export const Naslov = styled.h1`
    color: white;
`;

export const Foi = styled.p`
    color: #be9737;
    font-size: 35px;
`;

export const Datum = styled.p`
    color: white;
    font-size: 25px;
`;

export const Gumb = styled.button`
    border-radius: 6px;
    margin-bottom: 5px;
    font-size: 25px;
    background-color: #be9737;
    color: white;
`;