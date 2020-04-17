import styled from 'styled-components';

export const Section = styled.section`
    max-width: 560px;
    padding-top: 100px;
    margin: 0 auto;

    @media screen and (min-width: 767px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        max-width: 760px;
    }
    
    @media screen and (min-width: 1024px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        max-width: 1024px;
    }
`;