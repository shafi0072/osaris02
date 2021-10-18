import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import Banner from '../../Resorce/Img/Img1.jpg';

const Gears = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <img src={Banner}/>
                <div>
                    <h2>Sell Your Guitar</h2>
                    <div className="d-flex">
                        <p>upload image :</p>
                        <input type="file"/>
                    </div>
                    <div>
                        <div className="d-flex">
                            <input type="radio" name="catagory"/>
                            <p>Acoustic</p>
                        </div>
                        <div className="d-flex">
                            <input type="radio" name="catagory"/>
                            <p>Acoustic</p>
                        </div>
                        <div className="d-flex">
                            <input type="radio" name="catagory"/>
                            <p>Acoustic</p>
                        </div>
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                    <div>
                        <h2>Contact with gmail</h2>
                        <a>Click here</a>
                    </div>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Gears;