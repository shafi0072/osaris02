import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import './Learn.css';

const Learn = () => {
    return (
        <div className="learn-container">
            <Navbar/>
                <div className="d-flex justify-content-evenly align-items-center py-4">
                    <div className="text-center learn-items-container p-3">
                        <h3 className="learn-h3">Learn Guitar</h3>
                        <p>You can learn guitar to us</p>
                        <p className="learn-p">Join Now</p>
                    </div>
                    <div className="text-center learn-items-container p-3">
                        <h3 className="learn-h3">Learn Guitar</h3>
                        <p>You can learn guitar to us</p>
                        <p className="learn-p">Join Now</p>
                    </div>
                </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Learn;