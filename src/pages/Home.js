import React from 'react';
import Progress from 'rsup-progress';

import HeroSection from '../components/HeroSection/HeroSection';
import More from '../components/More/More';
import LastYeat from '../components/LastYear/LastYear';

const Home = () => {
    const progress = new Progress()
    setTimeout(()=>{
        return progress.end();
    }, 1000);
    return(
        <>
            {progress.start()}
           <HeroSection/>
           <More/>
           <LastYeat/>
        </>
    );
}

export default Home;