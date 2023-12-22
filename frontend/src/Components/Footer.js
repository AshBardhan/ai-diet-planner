import React from "react";
import facebook from '../Images/facebook.png'
import twitter from '../Images/twitter.png'
import instagram from '../Images/instagram.png'
import './Footer.css';

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <h3>SHAPE</h3>
                            <span>&#169;</span>
                        </div>
                        <p>We provide you with healthy diet meal plans that are tailored to your individual needs and goals.</p>
                        <p>All rights registered | January 2023</p>
                    </div>
                    <div className="footer-menu">
                        <ul className="footer-links">
                            <li>Register</li>
                            <li>Account</li>
                            <li>Settings</li>
                            <li>About Us</li>
                            <li>Plans</li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <ul className="footer-links">
                            <li>Pricing</li>
                            <li>Meal Generator</li>
                            <li>Advanced</li>
                            <li>Quick Links</li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <ul className="footer-links">
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-menu footer-social">
                        <h5>Connect with us</h5>
                        <div className="footer-social-links dflex">
                            <img src={facebook} alt="facebook"/>
                            <img src={twitter} alt="facebook"/>
                            <img src={instagram} alt="facebook"/>
                        </div>
                        <h5>Address : </h5>
                        <p>
                            45A, Old Buckingham Road,
                            <br/> 
                            Church Street,  
                            London, UK
                            <br/>
                            247667
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}