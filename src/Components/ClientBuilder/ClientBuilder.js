import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from "./Banner";
import BuildCategory from './BuildCategory.js';
import BuilderInput from './BuilderInput';
import Footer from './../Home/Footer/Footer';

const ClientBuilder = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <BuildCategory/>
            <BuilderInput/>
            <Footer/>
        </div>
    );
};

export default ClientBuilder;