import React from 'react';
import BackgroundImg from '../../../Resorce/1614310.jpg';
import BangladeshMap from '../../../Resorce/Untitled-1.png';
import './Made.css'
const MadeLocation = () => {
    return (
        <div className='bangladesh-container'>
            <img className='background' src={BackgroundImg}/>
            <div className='row bangladesh-text-container'>
                <div className='col-md-7'>
                    <div>
                        <h1>PROUDLY MADE IN <br/>BANGLADESH</h1>
                        <p>Over the past 5 years, we’ve worked dedicated & passionate to build something that brings happiness to the Musicians around the country.
                        Our very own built instruments, which are both affordable & keeps up with
                        the quality. The greatest gratification is to receive recognition for what
                        we built. This motivates us to improve even better. Let’s build a better
                        future for the musicians and local manufacturers to grow together and
                        proudly introduce our country on the global platform.</p>
                        <h4>We Are Proudly Made in Bangladesh</h4>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div>
                        <img src={BangladeshMap}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MadeLocation;