import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Contact from '../../Home/Contract/Contract';
import Footer from '../../Home/Footer/Footer';
import Guitar1 from '../../../Resorce/Img/a6h-main-137637.png';
import Guitar2 from '../../../Resorce/Img/am7.png';
import Guitar3 from '../../../Resorce/Img/am8.png';
import GuitarGallery from './../../../Resorce/Img/am6-monster-burst.jpg';
import './GuitarDetails.css';


const GuitarDetails = () => {
    return (
        <div className="guitar-details-container">
            <Navbar/>
            <div>
                <div className="row py-5">
                    <div className="col-md-3">
                        <ul>
                            <li className="guitar-img-container mb-3"><img className="guitar-img" src={Guitar1}/></li>
                            <li className="guitar-img-container mb-3"><img className="guitar-img" src={Guitar2}/></li>
                            <li className="guitar-img-container"><img className="guitar-img" src={Guitar3}/></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="guitar-main-img" src={Guitar1}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div>
                                <h1>ARIES</h1>
                                <h3>BOLT-ON</h3>
                                <p>Available in 6, 7 and 8 strings</p>
                                <p>Starting At</p>
                                <h2>$1,299</h2>
                            </div>
                            <div>
                                <p>Or a deposit of: <span>$260</span> with <span>Partial.ly</span></p>
                                <a>Learn More</a>
                                <p>Deposit price based on model's starting price</p>
                                <button>Buy Now</button>
                                <button>Add TO Cart</button>
                                <p>Share: <span>icon</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-text-container">
                    <p>The ARIES marked a major turning point for Kiesel; though classic designs were still available, they were no longer the exclusive builds. With its prominent bevel and effortless fret access in a bolt-on configuration, the</p>
                </div>
                <div>
                    <h2>Gallery</h2>
                    <div className="row">
                        <div className="col-md-6 p-0"><img className="gallery-big" src={GuitarGallery}/></div>
                        <div className="col-md-6 p-0"><img className="gallery-big" src={GuitarGallery}/></div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 p-0">
                            <img className="gallery-big" src={GuitarGallery}/>
                        </div>
                        <div className="col-md-3 p-0">
                            <img className="gallery-big" src={GuitarGallery}/>
                        </div>
                        <div className="col-md-3 p-0">
                            <img className="gallery-big" src={GuitarGallery}/>
                        </div>
                        <div className="col-md-3 p-0">
                            <img className="gallery-big" src={GuitarGallery}/>
                        </div>
                    </div>
                </div>
                <div className="video-container py-5">
                    <iframe className="video" src = "https://www.youtube.com/embed/M4lsB-B1O7U">
                    </iframe>
                </div>
                <div className="details-container py-5">
                    <h2>Standard Specs</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>Alder</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h4>BODY</h4>
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