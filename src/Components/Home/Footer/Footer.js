import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'
const Footer = () => {
    return (
        <div className="pt-3 pb-3 footer-container">
            <div className="footer-items-container">
                <ul className="d-flex justify-content-between align-item-center footer-items">
               <li className="li-item">CONTACT</li>
               <li className="li-item">ABOUT</li>
               <li className="li-item">FAQ</li>
               <li className="li-item">PRIVACY POLICY & LEGAL</li>
           </ul>
            </div>

           
           <div className="footer-copyright-container">
               <div class="row mt-3">
                   <div className="col-md-4 logo">LOGO</div>
                   <div className="col-md-4 copyright">Copyright © 2021 Kiesel Guitars. All Rights Reserved.</div>
                   <div className="col-md-4">
                       <ul className="d-flex justify-content-center align-item-center">
                           <li><FacebookIcon/></li>
                           <li></li>
                           <li></li>
                           <li></li>
                       </ul>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;