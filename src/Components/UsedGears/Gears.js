import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import Banner from '../../Resorce/Img/Img1.jpg';
import './Gears.css';

const Gears = () => {
    return (
        <div className="gears-full-container">
            <Navbar/>
            <div className="gears-container text-white py-4">
                <img className="gears-img" src={Banner}/>
                <div className="gears-items-container py-5">
                    <h2 className="gears-h2 py-2">Sell Your Guitar</h2>
                    <div className="d-flex justify-content-center align-items-center py-2">
                        <p className="gears-p me-3">upload image 1 :</p>
                        <input type="file"/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-2">
                        <p className="gears-p me-3">upload image 2 :</p>
                        <input type="file"/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-2">
                        <p className="gears-p me-3">upload image 3 :</p>
                        <input type="file"/>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center align-items-center py-1">
                            <input type="radio" name="catagory"/>
                            <p className="gears-p gears-p-width">Acoustic</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <input type="radio" name="catagory"/>
                            <p className="gears-p gears-p-width">Electric</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <input type="radio" name="catagory"/>
                            <p className="gears-p gears-p-width">Bass</p>
                        </div>
                    </div>
                    <div className="py-3">
                        <input className="btn btn-primary gears-sell-button" type="submit"/>
                    </div>
                    <div>
                        <h2 className="gears-h2 py-2">Contact with gmail</h2>
                        <a className="gears-click-button">Click here</a>
                    </div>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Gears;