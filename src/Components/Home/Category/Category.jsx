import React from 'react';
import Image1 from '../../../Resorce/Img/Img1.jpg';
import Image2 from '../../../Resorce/Img/Img2.jpg';
import Image3 from '../../../Resorce/Img/Img3.jpg';
import Image4 from '../../../Resorce/Img/Img4.jpg';
import './Category.css'
const Category = () => {
    return (
        <div className="mt-5 mb-4">
            <div className="row">
                <div className="col-md-6 img1">
                    <img src={Image1} className="cetagory-img" alt="" />
                </div>
                <div className="col-md-6 img2">
                    <img src={Image2} className="cetagory-img" alt="" />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-md-6 img3">
                    <img src={Image3} className="cetagory-img" alt="" />
                </div>
                <div className="col-md-6 img4">
                    <img src={Image4} className="cetagory-img" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;