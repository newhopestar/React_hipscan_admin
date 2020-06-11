import React from 'react';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'

import './ProfilePhoneScreen.css';

import Handshake from '../../assets/images/handshake.jpg';
import Profile from '../../assets/images/profile.jpg';
import logo from '../../assets/images/logo.svg';

class ProfilePhoneScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:"Display Name",
            description:"Description of Product",
            
        }
    }

    render(){
        return(
            <div className="profile-phone-screen">
                <div className="profile">
                    <img src={Handshake} className="background" alt="background"/>
                    
                    <div className="profile-photo">
                        <img src={Profile} alt="profile"/>
                    </div>
                    <div className="display-name">
                        <p>{this.state.name}</p>
                    </div>
                    <div className="social-icons">
                        <FaDribbble className="social" size="1.8rem"/>
                        <FaFacebookF className="social" size="1.8rem"/>
                        <FaTwitter className="social" size="1.8rem"/>
                        <FaInstagram className="social" size="1.8rem"/>
                    </div>
                    <div className="description">
                        <p>{this.state.description}</p>
                    </div>
                    <div className="contact-info">
                        <p>+1 5769 4 19312</p>
                        <h5>contact@email.com</h5>
                    </div>
                    <div className="video-screen">
                        <FaRegPlayCircle className="play" size="1.7rem"/>
                    </div>
                    <div className="phone-footer">
                        <p>POWERED BY</p>
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePhoneScreen;