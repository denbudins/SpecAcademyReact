import styled from 'styled-components';

export const Kartica = styled.div`
    width: calc((100% -25%) - 11px);
    margin-right: 15px;
    margin-bottom: 40px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    :hover{
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

export const Slika = styled.img`
   height: 200px;
    width: 200px;
    padding: 10px;
`;

export const Naslov = styled.h3`
`;