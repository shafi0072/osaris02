import React from 'react';
import './Contact.css'
const Contract = () => {
    return (
        <div className="contact-container">
            <h1 className="text-center contact-title mb-2">Contact Us</h1>
           <h4 className="text-center contact-p mb-3">Join our newsletter to receive information on new products, sales and more!</h4>
            <div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Email Adress" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <span class="input-group-text" id="basic-addon2">Sign up</span>
                </div>
            </div>
        </div>
    );
};

export default Contract;