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
                    <div className="price-container mt-4">
                        <span className="price-text">Starting At </span>
                        <span className="price-amount"> $1,299</span>
                    </div>
                    <div className="hover-items">
                        <p className="mt-1">Available Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuitarCard;