import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer'

const Learn = () => {
    return (
        <div>
            <Navbar/>
                <div>
                    <div className="d-flex">
                        <p>Learn Guitar</p>
                        <p>Join Now</p>
                    </div>
                    <div className="d-flex">
                        <p>Learn Guitar Withinship</p>
                        <p>Apply Now</p>
                    </div>
                </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Learn;