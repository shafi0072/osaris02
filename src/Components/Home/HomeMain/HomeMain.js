import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Builder from '../Builder/Builder';
import Category from '../Category/Category.jsx';
import Contract from '../Contract/Contract';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import MadeLocation from './../MadeLocation/MadeLocation';

const HomeMain = () => {
    return (
        <div style={{backgroundColor:"#141414"}}>
            <Navbar/>
            <Slider/>
            <Builder/>
            <Category/>
            <MadeLocation/>
            {/* <Contract/> */}
            <Footer/>
        </div>
    );
};

export default HomeMain;