import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <Navbar/>
            <div>
                <h1>Comming soon</h1>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Blog;