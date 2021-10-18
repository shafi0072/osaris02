import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Contact from '../Home/Contract/Contract';
import Footer from '../Home/Footer/Footer';
import Blog1 from '../../Resorce/Img/Img1.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <Navbar/>
            <div>
                <div>
                    <img src={Blog1}/>
                    <div>
                        <h1>This is blog title</h1>
                        <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                        <a>Reading Continue</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-8">
                                <h3>This is blog Title</h3>
                                <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                                <a>Reading Continue</a>
                            </div>
                            <div className="col-md-4">
                                <img src={Blog1}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-8">
                                <h3>This is blog Title</h3>
                                <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                                <a>Reading Continue</a>
                            </div>
                            <div className="col-md-4">
                                <img src={Blog1}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Blog;