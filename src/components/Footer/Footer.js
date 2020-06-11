import React from 'react';
import './Footer.css';
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa'

class Footer extends React.Component {

    render() {
        return (
            <div className = "footerbar">
                <div className = "footer"> 
                    <div className = "header-wrapper">
                        <div className="copyright">
                            Copyright Hipscan 2020. All Right Reserved
                        </div>
                        <div className="social-icon">
                            <div className="social">
                                <FaFacebookF/>
                            </div>
                            <div className="social">
                                <FaTwitter/>
                            </div>
                            <div className="social">
                                <FaInstagram/>
                            </div>
                        </div>
                        <div className="terms">
                            Terms and Conditions
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;