import React from 'react';
import GuitarDetails from '../Guitar/GuitarDetails';
import './Guitar.css';
import GuiterImg from '../../../Resorce/Img/a6h-main-137637.png';
const GuitarCard = (props) => {
    const {title,description,pricing,
    body,
    bridge,
    dimensions,
    electronics,
    fringerboard,
    frets,
    hardware,
    inlys,
    neck,
    neckWidth,
    notes,
    pickups,
    scaleLength,
    strings,
    tuners,
    weight,
    cat,
    youtubeLink, _id, imageOne, imageTwo, imageThree} = props.data
    return (
        
            <div className="col-md-4">
                <div className="card-container text-light">
                    <h3>{title}</h3>
                    <p>Bolt-On</p>
                    <img className="card-img my-3" src={`https://osaris-backend.herokuapp.com/${imageOne}`}/>
                    <div className="price-container mt-4">
                        <span className="price-text">Starting At </span>
                        <span className="price-amount"> ${pricing}</span>
                    </div>
                    <div className="hover-items">
                        <p className="mt-1">Available Now</p>
                    </div>
                </div>
            </div>
       
    );
};

export default GuitarCard;