import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import bdlogo3 from '../../../Resorce/bdlogo3.png'
import './Footer.css'
const Footer = () => {
    return (
        <div className="pt-3 pb-3 footer-container">
            <div className=" bg-danger">
                <ul className="d-flex justify-content-between align-item-center footer-items">
               <li className="li-item">FAQ</li>
               <li className="li-item">About Us</li>
               <li className="li-item">Contact Us</li>
               <li className="li-item">Privicy Policy & Legal</li>
           </ul>
            </div>

           
           <div className="footer-copyright-container mt-3 ">
           <div className="row container d-flex justify-content-between  mt-5">
                <div className="col-md-4 text-center">
                    <CallIcon style={{color:'white'}}/>
                    <span className="text-light ms-2">+8801305775556</span>
                </div>
                <div className="col-md-4 text-center">
                    <AlternateEmailIcon style={{color:'white'}}/>
                    <span className="text-light ms-2">bluesden.official@gmail.com</span>
                </div>
                <div className="col-md-4 text-center">
                    <LocationOnIcon style={{color:'white'}}/>
                    <span className="text-light ms-2">
29/13 Tajmahal Road, Block -C, Mohammmadpur 1207 Dhaka, Dhaka Division, Bangladesh</span>
                </div>
           </div>
               <div class="row mt-3">
                   <div className="col-md-2 logo">
                   <ul className="d-flex justify-content-center align-item-center">
                           <li><FacebookIcon className="footer-icon me-3"/></li>
                           <li><TwitterIcon className="footer-icon me-3"/></li>
                           <li><YouTubeIcon className="footer-icon me-3"/></li>
                           <li><InstagramIcon className="footer-icon me-3"/></li>
                       </ul>
                   </div>
                   <div className="col-md-8 copyright text-center my-2">Copyright © 2022 BluesDen.All Rights Reserved.</div>
                   <div className="col-md-2">
                       
                       <img src={bdlogo3} alt="" />
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;