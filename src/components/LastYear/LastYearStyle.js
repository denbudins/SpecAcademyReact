import styled from 'styled-components';

export const Section = styled.section`
    width: 100%;
    height: 400px;
    background-color: #efefef;
    padding-top: 70px;
    padding-bottom: 70px;
`;

export const BigCards = styled.section`
    width: 1280px;
    margin: auto;
`;

export const Naslov = styled.h2`
    text-align: center;
    margin-bottom: 25px;
`;

export const LeftColumn = styled.div`
    width: 50%;
    float: left;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    flex-direction: column;
    height: 350px;
`;

export const RightColumn = styled.div`
    width: 50%;
    float: right;
`;

export const Slika = styled.img`
    width: 100%;
    height: 350px;
    object-fit: contain;
`;