import React from 'react';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import { MdArrowBack } from 'react-icons/md';
import Iframe from 'react-iframe';
import './MenuCategoryPhoneScreen.css';

import MenuBG from '../../assets/images/menu-phone-bg.jpg';
import RestaurantImage from '../../assets/images/menu-photo.png';
import logo from '../../assets/images/logo.svg';
import Food from '../../assets/images/food.jpg';

class MenuCategoryPhoneScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <div className="menu-category">
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
                    <div className="foods">
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Breakfast Set</p>
                            <h5>$16.99</h5>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Omelette</p>
                            <h5>$16.99</h5>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Fluffy Pancakes</p>
                            <h5>$16.99</h5>
                        </div>
                    </div>
                    <div className="title">
                        <p>Launch</p>
                    </div>
                    <div className="foods">
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Lunch Set</p>
                            <h5>$23.99</h5>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Chicken Salad</p>
                            <h5>$20.99</h5>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Fluffy Pancakes</p>
                            <h5>$16.99</h5>
                        </div>
                    </div>
                    <div className="title">
                        <p>Beverages</p>
                    </div>
                    <div className="foods">
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Breakfast Set</p>
                            <h5>$16.99</h5>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Omelette</p>
                            <h5>$16.99</h5>
                        </div>
                        <div className="food">
                            <img className="image" src={Food} alt="food"/>
                            <p>Fluffy Pancakes</p>
                            <h5>$16.99</h5>
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

export default MenuCategoryPhoneScreen;