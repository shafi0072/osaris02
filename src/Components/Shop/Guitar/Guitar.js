import React, { useEffect, useState } from 'react';
import GuitarCard from './GuitarCard';
import Navbar from '../../Shared/Navbar/Navbar';
import Contact from '../../Home/Contract/Contract';
import Footer from '../../Home/Footer/Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Guitar.css';


const Guitar = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/guitar/')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
    },[])
    return (
        <div className="guiter-container">
            <Navbar/>
            <div className="text-center text-light py-2 guiter-text mb-4">
                <h1>GUITARS</h1>
            </div>
            <div className="row pb-5">
                <div className="col-md-4 text-light filter-container">
                    <h3>FILTER BY</h3>
                    <div className="filter-item-container">
                        <ul>
                            {/* <li className="filter-items-container">
                                <span className="filter-title">String Count</span>
                                <span><KeyboardArrowDownIcon className="arrow"/></span>
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
                            </li> */}
                            <li className="filter-items-container">
                                <span className="filter-title">Model Type</span>
                                <span><KeyboardArrowDownIcon className="arrow"/></span>
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
                            {/* <li className="filter-items-container">
                                <span className="filter-title">Headstock Construction</span>
                                <span><KeyboardArrowDownIcon className="arrow"/></span>
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
                            </li> */}
                            {/* <li className="filter-items-container">
                                <span className="filter-title">Neck Construction</span>
                                <span><KeyboardArrowDownIcon className="arrow"/></span>
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
                            </li> */}
                            <li className="filter-items-container">
                                <span className="filter-title">Price</span>
                                <span><KeyboardArrowDownIcon className="arrow"/></span>
                            
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
                        <div className="d-flex">
                            <input className="checkbox" type="checkbox"/>
                            <h6 className="stocks">FEATURE OF THE MONTH</h6>
                        </div>
                        <div className="d-flex">
                            <input className="checkbox" type="checkbox"/>
                            <h6 className="stocks">IN STOCK</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 p-0 row">
                    
                        
                    {
                        data.map(data =>  <GuitarCard data={data}/>)
                    }
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Guitar;