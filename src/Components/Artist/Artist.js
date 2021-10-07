import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import BigSign from '../../Resorce/Img/anna-sentina.jpg';
import SmallSign from '../../Resorce/Img/aj-bartholomew.jpg'
import './Artist.css';
const Artist = () => {
    return (
        <div className="artist-container">
            <Navbar/>
            <div>
                <div className="artists-title-container text-center text-light">
                    <h1>ARTISTS</h1>
                    <p>THE KIESEL GUITARS ARTIST FAMILY</p>
                </div>
                <h2>Signature Artists</h2>
                <div className="row sinature-container">
                    <div className="col-md-2">
                        <div>
                            <img className="signature-img" src={BigSign}/>
                            <div className="text-center">
                                <h4>Anna Sentian</h4>
                                <h5>Solo Artist</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Endorsers</h2>
                <div className="row sinature-container">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <div>
                                    <img className="signature-img" src={SmallSign}/>
                                    <div className="text-center">
                                        <h6>AJ Bartholomew</h6>
                                        <p>Eyes Set To Kill</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Artist;