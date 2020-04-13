import React from 'react';
import '../HeroSection/HeroSection.scss';

const HeroSection = () => {
    return(
        <section class="heroSection">
            <div class="heroContainer">
                <h1>Tjedan karijera</h1>
                <p class="foi">FOI</p>
                <p class="datum">20.10.2020. - 26.10.2020.</p>
                <button>Prijavi se</button>
            </div>
        </section>
    );
}

export default HeroSection;