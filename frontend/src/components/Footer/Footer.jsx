import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, et? Saepe, aspernatur, ad tempore, blanditiis nesciunt tenetur assumenda perferendis voluptate praesentium similique esse cum sint nisi! Odit nulla iure minima.</p>
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
                    <li>Abouts us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 7667065422</li>
                    <li>Mdasad@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='fotter-copyright'>Copyright 2025 c Tomato.com-All Right Reversed</p>
    </div>
  )
}

export default Footer