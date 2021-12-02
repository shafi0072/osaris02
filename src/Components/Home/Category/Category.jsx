import React from 'react';

import Image2 from '../../../Resorce/y.png';
import Image3 from '../../../Resorce/Img/Img3.jpg';
import Image4 from '../../../Resorce/Img/Img4.jpg';
import './Category.css';
import '../Responsive.css';
const Category = () => {
    return (
        <div className="mt-5 row">
            <div className="row  mb-5 sr">
                <div className="col-md-6 mb-2">
                    {/* <img className="img1" src={Image1} alt="" /> */}
                    <div className=" img01-text">
                        <h3 className="img-h3 text-light">Artist <br /> Signature</h3>
                        
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                    {/* <img className="img2" src={Image2} alt="" /> */}
                    <div className="img02-text">
                        <h3 className="featured-Image">FEATURED OF <br /> THE MONTH</h3>
                        
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-md-6  mb-2">
                <div className="img03-text">
                        <h3 className="img-h3 text-light">CUSTOM MADE <br />ACOUSTIC</h3>
                        
                    </div>
                </div>
                <div className="col-md-6 mb-2">
                <div className="img04-text">
                        <h3 className="featured-Image text-light ">CUSTOM MADE <br />ACOUSTIC</h3>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Category;