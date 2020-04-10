import React from 'react';

import HeroSection from '../components/HeroSection/HeroSection';
import More from '../components/More/More';
import LastYeat from '../components/LastYear/LastYear';

const Home = () => {
    return(
        <>
           <HeroSection/>
           <More/>
           <LastYeat/>
        </>
    );
}

export default Home;