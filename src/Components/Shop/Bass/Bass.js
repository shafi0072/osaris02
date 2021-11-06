import React from 'react';
import BassCard from './BassCard';
import Navbar from '../../Shared/Navbar/Navbar';
import Contact from '../../Home/Contract/Contract';
import Footer from '../../Home/Footer/Footer';
import './Bass.css';
const Bass = () => {
    return (
        <div className="bass-container">
            <Navbar/>
            <div className="text-center text-light py-2 guiter-text mb-4">
                <h1>SHOP</h1>
            </div>
            <div className="row">
                <div className="col-md-3 text-light filter-container">
                    <h3>FILTER BY</h3>
                    <div className="filter-item-container">
                        <ul>
                            <li className="filter-items-container"><span className="filter-title">String Count</span>
                                <ul>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> 6 (47)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> 7 (24)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> 8 (12)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> 12 (1)</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter-items-container"><span className="filter-title">Model Type</span>
                                <ul>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> Standard (27)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> Artist (17)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> Acoustic (4)</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter-items-container"><span className="filter-title">Headstock Construction</span>
                                <ul>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> Headstock (35)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> Headless (12)</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter-items-container"><span className="filter-title">Neck Construction</span>
                                <ul>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> Bolt-On (17)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> Neck-Thru (18)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> Set-Neck / Set-Thru (12)</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="filter-items-container"><span className="filter-title">Price</span>
                                <ul>
                                    <li>
                                        <input type="checkbox"/>
                                        <span> $1200 - $1500 (15)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span>  $1500 - $2000 (15)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span>  $2000 - $2500 (15)</span>
                                    </li>
                                    <li>
                                        <input type="checkbox"/>
                                        <span>  $2500 & Above (15)</span>
                                    </li>
                                </ul>
                            </li>
                            {/* <li className="filter-items-container"><Link className="filter-title" to="/gears">Used Gears</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    
                        <BassCard/>
                    
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Bass;