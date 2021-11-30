import React from 'react';
import Build from '../../../Resorce/Img/matrix.jpg';
import './Builder.css';
import '../Responsive.css';

const Builder = () => {
    return (
        <div className="mt-2">
            <div className="slider-img-containter text-center">
                <h1>BUILD YOUR DREAM GUITAR WITH US!</h1>
                <h4>Click here to get pricing</h4>
                <button className="btn btn-danger">Start Building</button>
            </div>
        </div>
    );
};

export default Builder;