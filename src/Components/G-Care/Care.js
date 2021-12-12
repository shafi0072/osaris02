import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Banner from '../../Resorce/web cover 4.jpg';
import './Care.css';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

const Care = () => {
    return (
        <div className='gCare-container'>
            <Navbar/>
            <img className='care-banner' src={Banner}/>
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
            <div className='border'></div>
            <Footer/>
        </div>
    );
};

export default Care;