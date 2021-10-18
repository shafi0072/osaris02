import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import Banner from '../../Resorce/Img/Img1.jpg';

const Care = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <div>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tellus lorem, a auctor dui rutrum eget. Nulla facilisi. Vivamus consequat neque at nisl facilisis convallis. Sed ut imperdiet massa. Aenean a aliquam justo. Vivamus blandit ipsum non risus dignissim iaculis. Donec posuere vehicula nunc vel lacinia</p>
                </div>
                <div>
                    <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </div>
                <div>
                    <h1>Our Services</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <p>icon</p>
                                <h4>Title</h4>
                                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus tellus lorem, a auctor dui rutrum eget. Nulla facilisi. Vivamus consequat neque at nisl facilisis convallis. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Book Now</p>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Care;