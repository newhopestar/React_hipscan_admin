import React from 'react';
import './HomePhone.css';
import MenuPhone from '../../components/MenuPhone/MenuPhone';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import MenuBg from '../../assets/images/menu-phone-bg.jpg';
import MenuPhoto from '../../assets/images/menu-photo.png';
import logo from '../../assets/images/logo.svg';
import { Button } from 'react-bootstrap';

class HomePhone extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            restaurantName:"Restaurant Name",
            description:"Description of restaurant",
        }
    }

    render(){
        return(
            <div className="home-phone">
                <div className="menu">
                    <img src={MenuBg} className="background" alt="background"/>
                    
                    <div className="menu-photo">
                        <img src={MenuPhoto} alt="menuphoto"/>
                    </div>
                    <div className="display-name">
                        <p>{this.state.restaurantName}</p>
                    </div>
                    <div className="contact-info">
                        <p>+1 5769 4 19312</p>
                        <h5>contact@email.com</h5>
                    </div>
                    <div className="description">
                        <p>{this.state.description}</p>
                    </div>
                    <p>www.website.com</p>
                    <div className="social-icons">
                        <FaDribbble className="social" size="1.8rem"/>
                        <FaFacebookF className="social" size="1.8rem"/>
                        <FaTwitter className="social" size="1.8rem"/>
                        <FaInstagram className="social" size="1.8rem"/>
                    </div>
                    
                    <div className="view-menu-btn">
                        <Button>VIEW MENU</Button>
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

export default HomePhone;