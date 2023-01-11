import React from 'react';
import LandingPageSection from '../components/LandingPageSection';
import NumberCount from '../components/NumberCount';
import SectionFive from '../components/SectionFive';
import SectionThree from '../components/SectionThree';
import SectionTwo from '../components/SectionTwo';
import SectionSix from '../components/SectionSix';
import SectionSeven from '../components/SectionSeven';
import SectionEight from '../components/SectionEight';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <div>
            <LandingPageSection />
            <SectionTwo />
            <SectionThree />
            <NumberCount />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <Footer />
        </div>
    )
}


export default Homepage;