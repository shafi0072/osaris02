import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import logo from '../../Resorce/guitar-care-logo.png';
import './Care.css';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const Care = () => {
    return (
        <div className='gCare-container'>
            <Navbar/>
            <div className='schedule-container'>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>
                        <div className='gcare-schedule p-5 m-5'>
                            <div className='gcare-logo-container'>
                                <img className='gcare-logo' src={logo}/>
                            </div>
                            <p>From basic setups to full restorations of damaged or neglected vintage instruments, you can trust the craftspeople at BluesDen Guitar Care, Repair & Restoration to provide the expert care and attention your instrument needs.</p>
                            <ul className='m-0 p-0'>
                                <li className='gCare-list mb-2'>From setups to complete restorations and rebuilds, we can handle it all</li>
                                <li className='gCare-list mb-2'>Highly experienced staff</li>
                                <li className='gCare-list mb-2'>We service acoustic and electric guitars, and more - all brands welcome</li>
                                <li className='gCare-list mb-2'>Quality service Guaranteed</li>
                            </ul>
                            <div className='d-flex justify-content-between align-items-start'>
                                <input className='gcare-checkbox' type="checkbox"/>
                                <p>I have read and agree to the <snap className="text-danger">Repair Disclaimer</snap>. I am 18 years or older or have a parent with me.</p>
                            </div>
                            <div className='gcare-fitst-button-container'>
                                <button className='gcare-fitst-button bg-danger py-1'>Schedule a Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='service-title-bg'>
                <div className='service-title d-flex justify-content-between align-items-center'>
                    <StarIcon/>
                    <StarIcon className='big-star'/>
                    <h1>QUALITY SERVICE GUARANTEED</h1>
                    <StarIcon className='big-star'/>
                    <StarIcon/>
                </div>
            </div>
            <div className='service-text'>
                <p>GuitarCare Bangladesh works with stringed instruments in need of attention at our in-house repair and restoration facility. Offering a staff of highly skilled and experienced luthiers in our state-of-the-art climate-controlled environment, We are fully-equipped to perform any operations required in all phases of repair and restoration.</p>
                <ul>
                    <li className='gCare-list'>Pro Set Up Acoustic or ElectricX</li>
                    <li className='gCare-list'>Fret Work Fret dress to Plane & RefretX</li>
                    <li className='gCare-list'>Structural Repairs Body cracks, broken headstocks, Etc.X</li>
                    <li className='gCare-list'>Neck ResetsX</li>
                    <li className='gCare-list'>Custom PaintX</li>
                    <li className='gCare-list'>Total Restorations</li>
                </ul>
                <p>If you have a repair issue, schedule a consultation, and GuitarCare Bangladesh will assist with honest, clear-cut solutions.</p>
                <p>We evaluate each situation individually and offer reliable time and cost estimates to address your instrument's needs. After repair authorization is issued and your instrument is received, we make a more formal evaluation and give you a detailed quote. No work begins until you approve all costs. When the work is complete, we contact you for payment and make arrangements to put the instrument back in your hands. It s that simple, so please schedule a consultation today. Email and phone contact options are also available.</p>
            </div>
            <div className='Gcare-button bg-danger mb-5'>
                <button className='Gcare-button-text'>Learn More</button>
            </div>
            <div className='service-sector py-4'>
                <div className='row mb-4'>
                    <div className='col-md-4'>
                        <div className='service-sector-bg service-bg1 d-flex justify-content-center align-items-end'>
                            <h2 className='service-sector-text'>REGULAR MAINTENANCE</h2>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='service-sector-bg service-bg2 d-flex justify-content-center align-items-end'>
                            <h2 className='service-sector-text'>FRET WORKS</h2>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='service-sector-bg service-bg3 d-flex justify-content-center align-items-end'>
                            <h2 className='service-sector-text'>STRUCTURAL <br/> REPAIR</h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='service-sector-bg service-bg4 d-flex justify-content-center align-items-end'>
                            <h2 className='service-sector-text'>CUSTOM <br/> PAINT JOB</h2>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='service-sector-bg service-bg5 d-flex justify-content-center align-items-end'>
                            <h2 className='service-sector-text'>TOTAL <br/> RESTORATION</h2>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='service-sector-bg service-bg6 d-flex justify-content-center align-items-end'>
                            <h2 className='service-sector-text'>ELECTRONICS & HARDWARE</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Gcare-button bg-danger mb-5'>
                <button className='Gcare-button-text'>View All</button>
            </div>
            <div className='design-border bg-danger mb-4'></div>
            <div className='service-youtube mb-4'>
                <iframe className='youtube-style' width="100%" src="https://www.youtube.com/embed/-dnQtN3Yzso" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <Footer/>
        </div>
    );
};

export default Care;