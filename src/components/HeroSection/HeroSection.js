import React from 'react';
import {Section, Container, Naslov, Foi, Datum, Gumb} from './HeroSectionStyle';

const HeroSection = () => {
    return(
        <Section>
            <Container>
                <Naslov>Tjedan karijera</Naslov>
                <Foi>FOI</Foi>
                <Datum>20.10.2020. - 26.10.2020.</Datum>
                <Gumb>Prijavi se</Gumb>
            </Container>
        </Section>
    );
}

export default HeroSection;