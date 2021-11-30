import React from 'react';
import Image1 from '../../../Resorce/Web cover 3.jpg';
import Image2 from '../../../Resorce/y.png';
import Image3 from '../../../Resorce/Img/Img3.jpg';
import Image4 from '../../../Resorce/Img/Img4.jpg';
import './Category.css';
import '../Responsive.css';
const Category = () => {
    return (
        <div className="py-5 mb-4">
            <div className="row">
                <div className="col-md-6 img1-container img1-hover">
                    <img className="img1" src={Image1} alt="" />
                    <div className="img1-text">
                        <h3 className="img-h3 text-light">Artist <br /> Signature</h3>
                        
                    </div>
                </div>
                <div className="col-md-6 img1-container img2-hover">
                    <img className="img2" src={Image2} alt="" />
                    <div className="img2-text">
                        <h3 className="featured-Image">FEATURED OF <br /> THE MONTH</h3>
                        
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 img1-container img3-hover">
                    <img className="img3" src={Image4} alt="" />
                    <div className="img3-text">
                        <h1 className="img-h1">SINGLE COIL COMPARISON</h1>
                        <p className="img-p">Click Here To Watch</p>
                    </div>
                </div>
                <div className="col-md-6 img1-container img4-hover">
                    <img className="img4" src={Image3} alt="" />
                    <div className="img4-text">
                        <h1 className="img-h1">TYPE-X</h1>
                        <p className="img-p">Extreme Shape Without Extreme Discomfort</p>
                        <a className="img-link" href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Category;