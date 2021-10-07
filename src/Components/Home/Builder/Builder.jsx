import React from 'react';
import Build from '../../../Resorce/Img/matrix.jpg';
import './Builder.css';

const Builder = () => {
    return (
        <div>
            <div className="slider-img-containter">
                <img src={Build} className="builder-img" alt="" />
            </div>
            
            <div className="builder-text">
                <h1>VIRTUAL GUITAR BUILDER</h1>
                <p>CLICK HERE TO BUILD YOUR DREAM GUITAR TODAY</p>
            </div>
            
        </div>
    );
};

export default Builder;