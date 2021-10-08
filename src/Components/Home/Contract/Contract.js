import React from 'react';
import './Contact.css'
const Contract = () => {
    return (
        <div className="contact-container pt-3">
            <div className="contact-item-container">
                <h1 className="text-center contact-title pb-2">Contact Us</h1>
                <h4 className="text-center contact-p mb-3">Join our newsletter to receive information on new products, sales and more!</h4>
                <div>
                    <div class="input-group pb-3">
                        <input type="text" class="form-control contact-input py-2" placeholder="Email Adress" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span class="input-group-text sign-button" id="basic-addon2">SIGN UP</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contract;