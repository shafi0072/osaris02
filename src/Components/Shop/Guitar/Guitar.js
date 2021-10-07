import React from 'react';
import GuitarCard from './GuitarCard';
import Navbar from '../../Shared/Navbar/Navbar';
import './Guitar.css';

const Guitar = () => {
    return (
        <div className="guiter-container">
            <Navbar/>
            <div>
                <h1>GUITARS</h1>
            </div>
            <div className="row">
                <div className="col-md-3 text-light">
                    <h3>FILTER BY</h3>
                    <div className="filter-item-container">
                        <ul>
                            <li>String Count
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
                            <li>Model Type
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
                            <li>Headstock Construction
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
                            <li>Neck Construction
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
                            <li>Price
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
                        </ul>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <GuitarCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guitar;