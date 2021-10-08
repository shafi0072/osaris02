import React from 'react';
import './InStock.css';
import StocksImg from '../../../Resorce/Img/a6h-main-137637.png';
const GuitarCard = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card-container text-light">
                    <h3>ARIES</h3>
                    <p>Bolt-On</p>
                    <img className="card-img my-3" src={StocksImg}/>
                    <span>Starting At</span>
                    <span>$1,299</span>
                </div>
            </div>
        </div>
    );
};

export default GuitarCard;