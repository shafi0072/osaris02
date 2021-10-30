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
                            <h4>Wood Collection</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="mohogany">Mahogany (Red HardWood) - Heavy</option>
                                <option value="gmelina">Gmelina (White SoftWood) - Light</option>
                                <option value="acacia">Acacia (Dark Hardwood) - Medium</option>
                                <option value="rosewood">RoseWood (Red/Dark Hardwood) - Medium</option>
                                <option value="garjan">Garjan (Red Hardwood) (Light)</option>
                                <option value="pine">Pine (White Softwood) - Light</option>
                                <option value="alder">Alder (White Softwood) - Light</option>
                                <option value="ash">Ash (White Hardwood) - LightAudi</option>
                                <option value="oak">Oak (White Hardwood) - Light</option>
                                <option value="maple">Maple (White Hardwood) - Light</option>
                                <option value="teak">Teak (Mixed Hardwood) - Heavy</option>
                                <option value="siris">Siris (Mixed Hardwood) - Heavy</option>
                                <option value="chapalish">Chapalish (White hardwood) - Light</option>
                                <option value="shilkoroi">Shilkoroi (Mixed Hardwood) - Medium</option>
                                <option value="shegun">Shegun (Mixed Hardwood) - Heavy</option>
                                <option value="koa">Koa (Dark Harwood) - LightAudi</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="builder-details-title">BODY CONSTRUCTION</h2>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Wood Selecion </h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="mahogany">Mahogany (Red HardWood) - Medium Heavy</option>
                                <option value="gmelina">Gmelina (White SoftWood) - Light</option>
                                <option value="acacia">Acacia (Dark Hardwood) - Medium Heavy</option>
                                <option value="pine">Pine (White Softwood) - Light</option>
                                <option value="alder">Alder (White Softwood) - Light</option>
                                <option value="ash">Ash (White Hardwood) - Light</option>
                                <option value="oak">Oak (White Hardwood) - Light</option>
                                <option value="teak">Teak (Mixed Hardwood) - Heavy</option>
                                <option value="siris">Siris (Mixed Hardwood) - Heavy</option>
                                <option value="chapalish">Chapalish (White hardwood) - Light</option>
                                <option value="shilkoroi">Shilkoroi (Mixed Hardwood) - Medium Heavy</option>
                                <option value="shegun">Shegun (Mixed Hardwood) - Heavy</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Body Construction</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="pcs-1">1 pcs Body</option>
                                <option value="pcs-2">2 pcs Body </option>
                                <option value="pcs-3">3 pcs Body</option>
                                <option value="pcs-3+">3+ pcs Body</option>
                                <option value="custom">Custom Construction</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Body Shapes </h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="s-cutway">Single Cutway </option>
                                <option value="d-cutway">Double Cutway </option>
                                <option value="telecaster">Telecaster Style</option>
                                <option value="stratocaster">Stratocaster Style</option>
                                <option value="superstrat">SuperStrat Style</option>
                                <option value="lespaul">Classic LesPaul Style</option>
                                <option value="flying">Classic Flying V</option>
                                <option value="explorer">Classic Explorer</option>
                                <option value="sg">Classic SG</option>
                                <option value="prs">PRS Style</option>
                                <option value="jaguar">Jaguar Style</option>
                                <option value="hollowbody">Hollowbody</option>
                                <option value="m-superstrat">Mordern SuperStrat </option>
                                <option value="m-lespaul">Mordern LesPaul Style</option>
                                <option value="m-v-v2">Mordern V-V2</option>
                                <option value="m-explorer">Mordern Explorer</option>
                                <option value="precission">Precission style (Bass)</option>
                                <option value="d-cut">Mordern Double Cut Style (Bass)</option>
                                <option value="warwick">Warwick Style (Bass)</option>
                                <option value="custom">Custom Shape</option>
                            </select>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Body Curves</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="c-armrest">Custom Armrest</option>
                                <option value="deep">Deep Bellycut</option>
                                <option value="c-edges">Custom Edges</option>
                                <option value="archtop">Archtop</option>
                                <option value="engraved">Engraved Designs</option>
                                <option value="extreme">Extreme Curves</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Body Cavities</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="pickgaurd">Pickgaurd Cavity</option>
                                <option value="sami">Semi Floating Bridge Cavity</option>
                                <option value="f-bridge">Floating Bridge Cavity</option>
                                <option value="single-coil">Pickup Cavities - SingleCoil</option>
                                <option value="humbucker">Pickup Cavities - Humbucker</option>
                                <option value="hollow-weight">Hollow/Weight Reducing Cavities</option>
                                <option value="custom">Custom Electronics Cavity</option>
                            </select>
                        </div>
                    </div>

                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Body Binding </h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="3mm">1 ply bind (Body) 3mm</option>
                                <option value="6mm">3 ply bind (Body) 6mm</option>
                                <option value="10mm">5 ply bind (Body) 10mm</option>
                                <option value="custom">Custom Material Binding</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="builder-details-title">NECK CONSUCION</h2>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Wood Selection</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="mahogany">Mahogany (Red HardWood) - Medium</option>
                                <option value="acacia">Acacia (Dark Hardwood) - Medium</option>
                                <option value="garjan">Garjan (Red Hardwood) - Light</option>
                                <option value="maple">Maple (White Hardwood) - Light</option>
                                <option value="shilkoroi">Shilkoroi (Mixed Hardwood) - Medium</option>
                                <option value="koa">Koa (Dark Harwood) - Light</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck Construction</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="1pcs">1 pcs Neck</option>
                                <option value="3ply">3 ply Neck</option>
                                <option value="5ply">5 ply Body</option>
                                <option value="custom">Custom Construction</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Headstocks</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="tele">Single Row (Tele/Strat Style)</option>
                                <option value="pointed">Single Row (Pointed)</option>
                                <option value="prs">Dual Row (LP/PRS Style)</option>
                                <option value="musicman">Dual Row (Musicman Style)</option>
                                <option value="7-8">Dual Row (7/8 String)</option>
                                <option value="custom">Custom Head Design</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Headstock Angles </h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="straight">Straight</option>
                                <option value="6d">6 Degree</option>
                                <option value="12d">12 Degree</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck Taping </h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="slim">Slim Taped (C)</option>
                                <option value="ragular-c">Regular Taped (C)</option>
                                <option value="slim">Extra Slim (D)</option>
                                <option value="ragular-d">Regular Taped (D)</option>
                                <option value="soft">Soft (V) Taped</option>
                                <option value="custom">Custom Taping</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Truss Rod </h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="standard">Standard Truss Rod</option>
                                <option value="adjustment">Adjustment on Hill</option>
                                <option value="dual">Dual 3mm Reinforcement</option>
                                <option value="stainless">Stainless Steel Rod</option>
                                <option value="c-setup">Custom Setup</option>
                                <option value="c-cover">Custom Cover Plate</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Neck Assembly</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="bolt">Bolt-On Construction</option>
                                <option value="dovetail">Dovetail Joint Construction</option>
                                <option value="sami">Semi-though Body Construction</option>
                                <option value="through">Through Body Construction</option>
                                <option value="one">One Piece Guitar Construction</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="builder-details-title">FRETBOARD</h2>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Wood Selection</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="buck">Buck Maple - White</option>
                                <option value="acacia">Acacia - Light Brown</option>
                                <option value="siris">Siris - White/Dark Mixed Grain</option>
                                <option value="rosewood">RoseWood - Red/Dark Brown</option>
                                <option value="ebony">Ebony - Black</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Scale Lenths (Guitars & Basses) </h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="22">22</option>
                                <option value="22.5">22.5</option>
                                <option value="22.75">22.75</option>
                                <option value="24">24</option>
                                <option value="24.5">24.5</option>
                                <option value="24.75">24.75</option>
                                <option value="25">25</option>
                                <option value="25.5">25.5</option>
                                <option value="26.5">26.5</option>
                                <option value="27">27</option>
                                <option value="27.5">27.5</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="32">32</option>
                                <option value="34">34</option>
                                <option value="36">36</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Fret Numbers</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="20">20</option>
                                <option value="22">22</option>
                                <option value="24">24</option>
                                <option value="30">30</option>
                                <option value="custom">Custom Numbered Frets</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Fretboard Radius</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="7.25">7.25''</option>
                                <option value="9.50">9.50''</option>
                                <option value="10.50">10.50''</option>
                                <option value="12">12.00''</option>
                                <option value="14.5">14.50''</option>
                                <option value="16">16.00''</option>
                                <option value="flat">Flat</option>
                                <option value="compound">Compound Radius</option>
                                <option value="custom">Custom Radius</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Inlays</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="inlaya">No Inlays</option>
                                <option value="d-inlays">Dot Inlays </option>
                                <option value="f-inlays">12th Fret Inlays</option>
                                <option value="t-inlays">Block/ Trapiziod Inlays</option>
                                <option value="custom">Custom Inlay</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Inlay Material</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="mother">Mother of Pearl</option>
                                <option value="tortoise">Tortoise Shell</option>
                                <option value="Steel">Steel</option>
                                <option value="Acrylic">Acrylic</option>
                                <option value="Wood">Wood</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Body+Neck Binding</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="3mm">1 ply bind (Neck) 3 mm</option>
                                <option value="6mm">3 ply bind (Neck) 6mm</option>
                                <option value="custom">Custom Material Binding</option>
                            </select>
                        </div>
                    </div>
                    <div className="row imfomation-line">
                        <div className="col-md-3">
                            <h4>Fretwires</h4>
                        </div>
                        <div className="col-md-9">
                            <select className="builder-input" name="body" id="cars">
                                <option value="regular">Regular .7</option>
                                <option value="jumbo-9">Jumbo .9</option>
                                <option value="jumbo-11">Extra Jumbo .11</option>
                                <option value="steel">Stainless Steel .11</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="builder-details-title">PAINT & FINISHES</h2>
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