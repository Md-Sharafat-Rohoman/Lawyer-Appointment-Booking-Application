import React from 'react';
import HeroSection from '../../Banner/HeroSection/HeroSection';
import TopBannar from '../../Banner/TopBannar/TopBannar';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            {/* <h1>this is home</h1> */}
            <HeroSection></HeroSection>
            <TopBannar data={data}></TopBannar>
        </div>
    );
};

export default Home;