import React from 'react';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'

import './MenuPhone.css';

import MenuBg from '../../assets/images/menu-phone-bg.jpg';
import MenuPhoto from '../../assets/images/menu-photo.png';
import logo from '../../assets/images/logo.svg';
import { Button } from 'react-bootstrap';

class MenuPhone extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="menu-phone">
                <div className="menu">
                    {
                        this.props.bFile && this.props.bFile !== "" ?
                        <img src={ URL.createObjectURL(this.props.bFile)} className="background" alt="background"/> : <img src={MenuBg} className="background" alt="background"/>
                    }
                    <div className="menu-photo">
                        { this.props.uploadFile && this.props.uploadFile !=="" ?
                        <img src={ URL.createObjectURL(this.props.uploadFile)} style={{borderColor:this.props.themeColor}} /> 
                        :
                        <img src={MenuPhoto} alt="menuphoto" style={{borderColor:this.props.themeColor}}/>
                        }
                    </div>
                    <div className="display-name">
                        <p>{this.props.restaurantName}</p>
                    </div>
                    <div className="contact-info">
                        <p style={{color:this.props.themeColor}}>{this.props.c_number}</p>
                        <h5 style={{color:this.props.themeColor}}>{this.props.c_email}</h5>
                    </div>
                    <div className="description">
                        <p>{this.props.description}</p>
                    </div>
                    <p style={{color:this.props.themeColor}}>{this.props.c_address}</p>
                    <div className="social-icons">
                        <FaDribbble className="website" size="1.4rem" style={{backgroundColor:this.props.c_website!==""? this.props.themeColor :'#efefef'}}/>
                        <FaFacebookF className="facebook" size="1.4rem" style={{backgroundColor:this.props.c_facebook!==""? this.props.themeColor :'#efefef'}}/>
                        <FaTwitter className="twitter" size="1.4rem" style={{backgroundColor:this.props.c_twitter!==""? this.props.themeColor :'#efefef'}}/>
                        <FaInstagram className="instagram" size="1.4rem" style={{backgroundColor:this.props.c_instagram!==""? this.props.themeColor :'#efefef'}}/>
                    </div>
                    
                    <div className="view-menu-btn">
                        <Button style={{backgroundColor:this.props.themeColor}}>VIEW MENU</Button>
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

export default MenuPhone;