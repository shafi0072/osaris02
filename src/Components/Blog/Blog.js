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
            <div className="py-4">
                <div className="blog-1-container">
                    <img className="blog-1-img" src={Blog1}/>
                    <div className="blog-items">
                        <h1 className="blog-1-h1">This is blog title</h1>
                        <p className="blog-1-p">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                        <a className="blog-1-a">Reading Continue</a>
                    </div>
                </div>
                <div className="row blogs-container py-3">
                    <div className="col-md-6">
                        <div>
                            <div className="row blog2-items me-1">
                                <div className="col-md-8">
                                    <h3>This is blog Title</h3>
                                    <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                                    <a>Reading Continue</a>
                                </div>
                                <div className="col-md-4 p-0">
                                    <img className="blogs-img" src={Blog1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row blog2-items ms-1">
                            <div className="col-md-8">
                                <h3>This is blog Title</h3>
                                <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                                <a>Reading Continue</a>
                            </div>
                            <div className="col-md-4 p-0">
                                <img className="blogs-img" src={Blog1}/>
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