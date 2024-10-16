import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam, iure eum distinctio itaque perspiciatis asperiores, velit doloremque ducimus dolore officia provident quisquam blanditiis id deleniti odio expedita fuga architecto.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                    <ul>
                    <li>+91 98564 25365</li>
                    <li>contact@tomato.com</li>
                    </ul>
            </div>
        </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 &#169;  Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
