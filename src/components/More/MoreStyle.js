import styled from 'styled-components';

export const Section = styled.section`
    width: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 70px;
`;

export const Tekst = styled.p`
    max-width: 750px;
    font-size: 18px;
    margin-bottom: 40px;
`;

export const CardContainer = styled.div`
    width: 25%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
`;

export const Gumb = styled.button`
    border-radius: 6px;
    margin-bottom: 5px;
    font-size: 25px;
    background-color: #be9737;
    color: white;
`;