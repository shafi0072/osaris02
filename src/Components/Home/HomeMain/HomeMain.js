import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Builder from '../Builder/Builder';
import Category from '../Category/Category';
import Contract from '../Contract/Contract';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';

const HomeMain = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Slider/>
            <Builder/>
            <Category/>
            <Contract/>
            <Footer/>
        </div>
    );
};

export default HomeMain;