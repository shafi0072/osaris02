import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from "./Banner";
import BuildCategory from './BuildCategory.js';
import BuilderInput from './BuilderInput';
import Footer from './../Home/Footer/Footer';
import WoodCollection from './WoodCollection';


const ClientBuilder = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <BuildCategory/>
            <WoodCollection/>
            <BuilderInput/>
            <Footer/>
        </div>
    );
};

export default ClientBuilder;