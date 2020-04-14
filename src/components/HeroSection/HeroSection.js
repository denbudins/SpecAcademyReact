import React from 'react';
import '../HeroSection/HeroSection.scss';

const HeroSection = () => {
    return(
        <section class="HeroSection">
            <div class="HeroSection-Container">
                <h1>Tjedan karijera</h1>
                <p class="HeroSection-Foi">FOI</p>
                <p class="HeroSection-Datum">20.10.2020. - 26.10.2020.</p>
                <button className="HeroSection-Gumb">Prijavi se</button>
            </div>
        </section>
    );
}

export default HeroSection;