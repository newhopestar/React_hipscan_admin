import React from 'react';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import './ProfilePhone.css';

import Handshake from '../../assets/images/handshake.jpg';
import Profile from '../../assets/images/profile.jpg';
import logo from '../../assets/images/logo.svg';
import { red } from 'color-name';

class ProfilePhone extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="profile-preview">
                <div className="profile">
                    {
                        this.props.bFile && this.props.bFile !== "" ?
                        <img src={ URL.createObjectURL(this.props.bFile)} className="background" alt="background"/> : <img src={Handshake} className="background" alt="background"/>
                    }
                    <div className="profile-photo">
                        { this.props.file && this.props.file !=="" ?
                        <img src={ URL.createObjectURL(this.props.file)} alt="profile"/> 
                        :
                        <img src={Profile} alt="profile"/>
                        }
                    </div>
                    <div className="display-name">
                        <p>{this.props.name}</p>
                    </div>
                    <div className="social-icons">
                        <FaDribbble className="website" size="1.4rem" style={{ background:this.props.c_website!==""? '#f36e21':'#efefef'}}/>
                        <FaFacebookF className="facebook" size="1.4rem" style={{ background:this.props.c_facebook!==""? '#f36e21':'#efefef'}}/>
                        <FaTwitter className="twitter" size="1.4rem" style={{ background:this.props.c_twitter!==""? '#f36e21':'#efefef'}}/>
                        <FaInstagram className="instagram" size="1.4rem" style={{ background:this.props.c_instagram!==""? '#f36e21':'#efefef'}}/>
                    </div>
                    <div className="description">
                        <p>{this.props.description}</p>
                    </div>
                    <div className="contact-info">
                        <p>{this.props.c_number}</p>
                        <h5>{this.props.c_email}</h5>
                    </div>
                    <div className="video-screen">
                        {this.props.c_videoURL!=="" ?
                        <ReactPlayer url={this.props.c_videoURL} playing width="100%" height="100%"/>
                        :
                        <div className="play">
                            <FaRegPlayCircle className="icon" size="1.2rem"/>
                        </div>
                        }
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

export default ProfilePhone;