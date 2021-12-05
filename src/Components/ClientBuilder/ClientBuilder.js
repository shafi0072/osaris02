import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from "./Banner";
import BuildCategory from './BuildCategory.js';
import BuilderInput from './BuilderInput';

const ClientBuilder = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <BuildCategory/>
            <BuilderInput/>

        </div>
    );
};

export default ClientBuilder;