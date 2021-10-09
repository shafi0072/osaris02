import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contract from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import './ClientBuilder.css';

const ClientBuilder = () => {
    return (
        <div className="clientBuilder-container">
            <Navbar/>
            <div>
               <h2 className="details-title">Standard Specs</h2>
                <form className="details-container py-2">
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Body"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Bridge</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Bridge"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Dimensions</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Dimensions"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Electronics</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Electronics"/>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Fingerboard</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Fingerboard"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Frets</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Frets"/>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Hardware</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Hardware"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Inlays</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Inlays"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Neck"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck Width</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Neck Width"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Notes</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Notes"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Pickups</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Pickups"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Scale Length</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Scale Length"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Strings</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Strings"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Tuners</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Tuners"/>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Weight</h4>
                        </div>
                        <div className="col-md-9">
                            <input type="text" className="builder-input" placeholder="Weight"/>
                        </div>
                    </div>
                </form>
            </div>
            <Contract/>
            <Footer/>
        </div>
    );
};

export default ClientBuilder;