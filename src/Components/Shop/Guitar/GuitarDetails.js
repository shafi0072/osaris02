import React, {useEffect, useState} from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Contact from '../../Home/Contract/Contract';
import Footer from '../../Home/Footer/Footer';


import './GuitarDetails.css';
import {useParams} from 'react-router-dom';

const GuitarDetails = () => {
    const {id} = useParams()
    const [signleData, setSingleData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/guitar/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
            .catch(err => console.log(err))
        }, [id])
    const {
        title,
        description,
        pricing,
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
        youtubeLink,
        _id,
        imageOne,
        imageTwo,
        imageThree
    } = signleData
    console.log(signleData)
    return (
        <div className="guitar-details-container">
            <Navbar/>
            <div className="container">
                <div className="row py-5">
                    
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                        {signleData.imageOne && <img src={`data:${imageOne.contentType};base64,${imageOne.img}`} class="card-img-top" style={{width:'25%'}} alt="..."/>}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div>
                            <div className="buy-container-details">
                                <h1 className="buy-h1">{title}</h1>
                                
                                <p className="buy-p">Available in 6, 7 and 8 strings</p>
                                <p className="buy-p">Starting At</p>
                                <h2 className="buy-h2">$ <span>{pricing}</span></h2>
                            </div>
                            <div>
                                <p className="buy-p">Or a deposit of: <span className="buy-amount"> $260</span> with <span>Partial.ly</span>
                                </p>
                                <a className="buy-link">Learn More</a>
                                <p>Deposit price based on model's starting price</p>
                                <button type="button" class="btn btn-primary buy-button">Add To Cart</button>
                                
                                <p>Share:
                                    <span>icon</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-text-container">
                    <p className="details-p">{description}</p>
                </div>
                <div className="container">
                    <h2 className="details-title">Gallery</h2>
                    
                    <div className="row container pe-auto d-flex justify-content-center">
                        <div className="col-md-4 p-0">
                            <div
                                class="card"
                                style={{
                                    width: "18rem"
                                }}>
                                {signleData.imageOne && <img src={`data:${imageOne.contentType};base64,${imageOne.img}`} class="card-img-top" alt="..."/>}
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div
                                class="card"
                                style={{
                                    width: "18rem"
                                }}>
                                {signleData.imageTwo && <img src={`data:${imageTwo.contentType};base64,${imageTwo.img}`} class="card-img-top" alt="..."/>}
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                        <div
                                class="card"
                                style={{
                                    width: "18rem"
                                }}>
                               {signleData.imageThree && <img src={`data:${imageThree.contentType};base64,${imageThree.img}`} class="card-img-top" alt="..."/>}
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <h2 className="details-title mt-3">GUITARS VIDEO</h2>
                <div className="video-container py-5">

                <iframe width="560" height="315" src={`${youtubeLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h2 className="details-title">Standard Specs</h2>
                <div className="details-container py-2">
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{body}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Bridge</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{bridge}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Dimensions</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{dimensions}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Electronics</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{electronics}</p>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Fingerboard</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{fringerboard}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Frets</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{frets}</p>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Hardware</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{hardware}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Inlays</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{inlys}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{neck}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck Width</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{neckWidth}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Notes</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{notes}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Pickups</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{pickups}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Scale Length</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{scaleLength}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Strings</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{strings}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Tuners</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{tuners}</p>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Weight</h4>
                        </div>
                        <div className="col-md-9">
                            <p>{weight}</p>
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