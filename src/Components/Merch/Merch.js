import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract'
import Footer from '../Home/Footer/Footer';
import './Merch.css';
const Merch = () => {
    return (
        <div className="merch-container">
            <Navbar/>
            <div className="text-center">
                <h1 className="march-title">OFFICAL MERCH SHOP</h1>
                <p>Want apparel and accessories that match your custom-made Kiesel instrument? Our vast merch line includes shirts, 75th-anniversary collectibles, the infamous pink cup seen on our weekly Q&As, and much more. The officially licensed Kiesel Guitars Merch Store has what you need to represent your favorite American custom guitar shop!</p>
                <p>We are partnered with the Los Angeles-based Rock World Merchandise to bring you top-of-the-line products.</p>
                <h1>RWM</h1>
                <h4>Click <span>here</span> to visit</h4>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Merch;