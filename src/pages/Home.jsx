import React from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import InfoCards from '../components/InfoCards';
import AboutSection from '../components/AboutSection';
import CallToAction from '../components/CallToAction';

const Home = () => {
    return (
        <main>
            <HeroSlideshow />
            <InfoCards />
            <AboutSection />
            <CallToAction />
        </main>
    );
};

export default Home;
