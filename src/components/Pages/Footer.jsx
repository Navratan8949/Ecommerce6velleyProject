import React from 'react'
import "./Footer.css"
// import TwitterIcon from '@mui/icons-material/Twitter';
import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GoogleIcon from '@mui/icons-material/Google';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import PhoneIcon from '@mui/icons-material/Phone';
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div className='footer-top'>
                <div className='valley-img-div'>
                    <img src="https://6valley-aster.6amtech.com/storage/app/public/company/2023-06-13-64885c88d2be7.png" alt="" />
                </div>

                <div className='social-media-apps'>
                    <a style={{ color: "white" }} href="https://twitter.com/Mohit4191810481"><FaLinkedin /></a>
                    {/* <a href="https://www.linkedin.com/in/mohit-chhipa-533834279/"><LinkedInIcon sx={{ color: "white" }} /></a>
                    <a href="https://www.google.com/"><GoogleIcon sx={{ color: "white" }} /></a>
                    <a href="https://www.pinterest.com/"><PinterestIcon sx={{ color: "white" }} /></a>
                    <a href="https://www.instagram.com/10_mohit_chhipa/"><InstagramIcon sx={{ color: "white" }} /></a>
                    <a href="https://www.facebook.com/"><FacebookIcon sx={{ color: "white" }} /></a> */}
                </div>

                <div className='customer-care'>
                    <div className='customer-care-icon'>
                        {/* <PhoneIcon sx={{ color: "white", fontSize: '27px' }} /> */}
                    </div>
                    <div className='customer-care-numbers'>
                        <h4>Hotline</h4>
                        <a href="tel:+91 8107196932">+91 8107196932</a>
                    </div>
                </div>
            </div>
            <div className='footer-middle-bar'>
                <div className='footer-middle-bar-first-div'>
                    <p>Kingston, New York 12401 United States</p>
                    <a style={{ color: 'white', textDecoration: "none" }} href="">info@6amtech.com</a>
                    <div className='footer-middle-bar-images' >
                        <img src="https://6valley-aster.6amtech.com/resources/themes/theme_aster/public/assets/img/media/google-play.png" alt="" />
                        <img src="https://6valley-aster.6amtech.com/resources/themes/theme_aster/public/assets/img/media/app-store.png" alt="" />
                    </div>
                    <h4>NEWSLETTER</h4>
                    <p>Subscribe our newsletter to get latest updates</p>
                </div>

                <div className='footer-middle-bar-second-div'>
                    <h3>Accounts</h3>
                    <div style={{ display: 'flex', flexDirection: "column", gap: '15px' }}>
                        <a href="">Open Your Store</a>
                        <a href="">Profile</a>
                        <a href="">Track Order</a>
                        <a href="">Help & Support</a>
                    </div>
                </div>

                <div className='footer-middle-bar-second-div'>
                    <h3> Quick Links</h3>
                    <div style={{ display: 'flex', flexDirection: "column", gap: "15px" }}>
                        <a href=""> Flash Deals</a>
                        <a href="">Featured Products</a>
                        <a href="">Top Stores</a>
                        <a href="">Latest Products</a>
                        <a href="">FAQ</a>
                    </div>
                </div>

                <div className='footer-middle-bar-second-div'>
                    <h3>Other</h3>
                    <div style={{ display: 'flex', flexDirection: "column", gap: '15px' }}>
                        <a href=""> About Company</a>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Refund policy</a>
                        <a href="">Return policy</a>
                        <a href="">Cancellation policy</a>
                        <a href="">Support Ticket</a>
                    </div>
                </div>
            </div>
            <div className='footer-last-div'>
                <p>Copyright 6amTech@2021</p>
            </div>
        </div>
    )
}

export default Footer;