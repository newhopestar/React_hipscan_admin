import React from 'react';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import { MdArrowBack } from 'react-icons/md';
import Iframe from 'react-iframe';
import './DetailedCategoryPhoneScreen.css';

import MenuBG from '../../assets/images/menu-phone-bg.jpg';
import RestaurantImage from '../../assets/images/menu-photo.png';
import logo from '../../assets/images/logo.svg';
import Food from '../../assets/images/food.jpg';

class DetailedCategoryPhoneScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <div className="detailed-menu-category">
                <div className="category-phone">
                    <img className="restaurant-photo" src={MenuBG} alt="menuBG"/>
                    <div className="backdrop"></div>
                    <div className="back-btn">
                        <MdArrowBack size="1.4rem"/>
                    </div>
                    <div className="avatar-name">
                        <img  className="avatar" src={RestaurantImage} alt="restaurant image"/>
                        <div className="name">
                            <p>Cradler Cafe</p>
                            <span>+1 5769 4 19312</span>
                        </div>
                    </div>
                    <div className="title">
                        <p>Breakfast</p>
                    </div>
                    <div className="detailed-foods">
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <div className="description">
                                <p>Breakfast Set</p>
                                <h4>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididuntut l aute irure dolote velit esse cillum donon</h4>
                                <h5>$16.99</h5>
                            </div>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <div className="description">
                                <p>Fluffy Pancakes</p>
                                <h4>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididuntut l aute irure dolote velit esse cillum donon</h4>
                                <h5>$16.99</h5>
                            </div>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <div className="description">
                                <p>Omelette</p>
                                <h4>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididuntut l aute irure dolote velit esse cillum donon</h4>
                                <h5>$16.99</h5>
                            </div>
                        </div>
                    </div>
                    <div className="title">
                        <p>Lunch</p>
                    </div>
                    <div className="detailed-foods">
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <div className="description">
                                <p>Lunch Set</p>
                                <h4>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididuntut l aute irure dolote velit esse cillum donon</h4>
                                <h5>$16.99</h5>
                            </div>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <div className="description">
                                <p>Lunch Set</p>
                                <h4>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididuntut l aute irure dolote velit esse cillum donon</h4>
                                <h5>$16.99</h5>
                            </div>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <div className="description">
                                <p>Lunch Set</p>
                                <h4>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididuntut l aute irure dolote velit esse cillum donon</h4>
                                <h5>$16.99</h5>
                            </div>
                        </div>
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

export default DetailedCategoryPhoneScreen;