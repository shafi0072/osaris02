import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contract from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import Img from '../../Resorce/Img/Img1.jpg';
import './ClientBuilder.css';

const ClientBuilder = () => {
    return (
        <div className="clientBuilder-container">
            <Navbar/>
            <div>
                <div className="py-5 text-center builder-about">
                    <h1>BUILDER DETAILS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tellus lorem, a auctor dui rutrum eget. Nulla facilisi. Vivamus consequat neque at nisl facilisis convallis. Sed ut imperdiet massa. Aenean a aliquam justo. Vivamus blandit ipsum non risus dignissim iaculis. Donec posuere vehicula nunc vel lacinia</p>
                </div>
               <h2 className="builder-details-title">Standard Specs</h2>
                <form className="details-container py-2">
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>BODY</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Bridge</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Dimensions</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Electronics</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Fingerboard</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Frets</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Hardware</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Inlays</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck Width</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Notes</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Pickups</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Scale Length</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Strings</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Tuners</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Weight</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                </form>
                <div className="text-center py-3">
                    <button type="button" class="btn btn-primary">Success</button>
                </div>
                <div className="builder-banner py-4">
                    <img className="builder-banner-img" src={Img}/>
                </div>
            </div>
            <Contract/>
            <Footer/>
        </div>
    );
};

export default ClientBuilder;