import React from 'react';
import BangladeshMap from '../../../Resorce/Untitled-1.png';
import './Made.css'
const MadeLocation = () => {
    return (
        <div className="row background">
            <div className="col-md-6 mt-5">
                <h1 className='text-light'>PROUDLY MADE IN <br /> BANGLADESH</h1>

                <p className='text-light mt-5'>Over the past 5 years, we’ve worked dedicated & passionate to build
something that brings happiness to the Musicians around the country.
Our very own built instruments, which are both affordable & keeps up with
the quality. The greatest gratification is to receive recognition for what
we built. This motivates us to improve even better. Let’s build a better
future for the musicians and local manufacturers to grow together and
proudly introduce our country on the global platform.</p>

<h5 className="text-light mt-5">We Are Proudly Made in Bangladesh</h5>
            </div>
            <div className="col-md-6">
                <img src={BangladeshMap} alt="" className="mapImage"/>
            </div>
        </div>
    );
};

export default MadeLocation;