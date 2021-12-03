import React from 'react';
import Navbar from './../Shared/Navbar/Navbar';
import Banner from './Banner';
import BuildCategory from './BuildCategory';

const ClientBuilder = () => {
    return (
        <div className='bg-dark'>
            <Navbar/>
            <Banner/>
            <BuildCategory/>
        </div>
    );
};

export default ClientBuilder;