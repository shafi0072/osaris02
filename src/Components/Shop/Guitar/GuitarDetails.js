import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Contact from '../../Home/Contract/Contract';
import Footer from '../../Home/Footer/Footer';
import Guitar1 from '../../../Resorce/Img/a6h-main-137637.png';
import Guitar2 from '../../../Resorce/Img/am7.png';
import Guitar3 from '../../../Resorce/Img/am8.png';
import GuitarGallery from './../../../Resorce/Img/am6-monster-burst.jpg';
import './GuitarDetails.css';
import { useParams } from 'react-router-dom';


const GuitarDetails = () => {
    const {id} = useParams()
    const [signleData, setSingleData] = useState([]);
  useEffect(() => {
        fetch(`http://localhost:5000/guitar/${id}`)
        .then(res => res.json())
        .then(data => setSingleData(data))
        .catch(err => console.log(err))
    },[id])
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
        youtubeLink, _id, imageOne, imageTwo, imageThree} = signleData
    console.log(signleData)
    return (
        <div className="guitar-details-container">
            <Navbar/>
            <div>
                <div className="row py-5">
                    <div className="col-md-3">
                        <ul>
                            <li className="guitar-img-container mb-3"><img className="guitar-img" src={`http://localhost:5000/${imageOne}`}/></li>
                            <li className="guitar-img-container mb-3"><img className="guitar-img"  src={`http://localhost:5000/${imageTwo}`}/></li>
                            <li className="guitar-img-container"><img className="guitar-img" src={`http://localhost:5000/${imageThree}`}/></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="guitar-main-img" src={`http://localhost:5000/${imageOne}`}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="buy-container-details">
                                 <h1 className="buy-h1">{title}</h1>
                                <h3 className="buy-h3">BOLT-ON</h3>
                                <p className="buy-p">Available in 6, 7 and 8 strings</p>
                                <p className="buy-p">Starting At</p>
                                <h2 className="buy-h2">$1,299</h2>
                            </div>
                            <div>
                                <p className="buy-p">Or a deposit of: <span className="buy-amount">$260</span> with <span>Partial.ly</span></p>
                                <a className="buy-link">Learn More</a>
                                <p>Deposit price based on model's starting price</p>
                                <button type="button" class="btn btn-primary buy-button">Success</button> 
                                <button type="button" class="btn btn-primary buy-button">Success</button>
                                <p>Share: <span>icon</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-text-container">
                    <p className="details-p">The ARIES marked a major turning point for Kiesel; though classic designs were still available, they were no longer the exclusive builds. With its prominent bevel and effortless fret access in a bolt-on configuration, the</p>
                </div>
                <div>
                    <h2 className="details-title">Gallery</h2>
                    <div className="row">
                        <div className="col-md-6 p-0"><img className="gallery-big" src={`http://localhost:5000/${imageOne}`}/></div>
                        <div className="col-md-6 p-0"><img className="gallery-big"   src={`http://localhost:5000/${imageTwo}`}/></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 p-0">
                            <img className="gallery-big" src={`http://localhost:5000/${imageOne}`}/>
                        </div>
                        <div className="col-md-3 p-0">
                            <img className="gallery-big"  src={`http://localhost:5000/${imageTwo}`}/>
                        </div>
                        <div className="col-md-3 p-0">
                            <img className="gallery-big" src={GuitarGallery}/>
                        </div>
                        <div className="col-md-3 p-0">
                            <img className="gallery-big" src={GuitarGallery}/>
                        </div>
                    </div>
                </div>
                <h2 className="details-title mt-3">GUITARS VIDEO</h2>
                <div className="video-container py-5">
                    
                    <iframe className="video" src = "https://www.youtube.com/embed/M4lsB-B1O7U">
                    </iframe>
                </div>
                <h2 className="details-title">Standard Specs</h2>
                <div className="details-container py-2">
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Bridge</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Construction</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Dimensions</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Electronics</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Fingerboard</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Frets</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Hardware</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Inlays</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck Width</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Notes</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Pickups</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Scale Length</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Strings</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Tuners</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Weight</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default GuitarDetails;