import React from 'react';
import './Bass.css';
import BassImg from '../../../Resorce/Img/a6h-main-137637.png';
const BassCard = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card-container text-light">
                    <h3>ARIES</h3>
                    <p>Bolt-On</p>
                    <img className="card-img my-3" src={BassImg}/>
                    <span>Starting At</span>
                    <span>$1,299</span>
                </div>
            </div>
        </div>
    );
};

export default BassCard;