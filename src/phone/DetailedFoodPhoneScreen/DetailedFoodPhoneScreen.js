import React from 'react';
import { Button } from 'react-bootstrap';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import { MdArrowBack } from 'react-icons/md';
import Iframe from 'react-iframe';
import './DetailedFoodPhoneScreen.css';

import MenuBG from '../../assets/images/menu-phone-bg.jpg';
import RestaurantImage from '../../assets/images/menu-photo.png';
import logo from '../../assets/images/logo.svg';
import Food from '../../assets/images/food.jpg';

class DetailedFoodPhoneScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            <div className="detailed-food-category">
                <div className="category-phone">
                    <img className="food-photo" src={Food} alt="food"/>
                    
                    <div className="back-btn">
                        <MdArrowBack size="1.4rem"/>
                    </div>
                    <div className="food">
                        <h4>Breakfast Set</h4>
                        <p>Lorem ipsum dolor sit amet, consecteturadipiscing elit, sed do eiusmod tempor incididuntut l aute irure dolote velit esse cillum donon</p>
                    </div>
                    <div className="additionals">
                        <div className="title-select">
                            <div className="title">
                                <h4>Additionals</h4>
                            </div>
                            <div className="select">
                                <div className="name">
                                    <input type="checkbox" name="test" />
                                    <span className="checkmark"></span>
                                    <p>Extra Bacon</p>
                                </div>
                                <span>$2.00</span>
                            </div>
                            <div className="select">
                                <div className="name">
                                    <input type="checkbox" name="test" />
                                    <p>Berries Toppings</p>
                                </div>
                                <span>$2.00</span>
                            </div>
                            <div className="select">
                                <div className="name">
                                    <input type="checkbox" name="test" />
                                    <p>Vanilla Ice Cream</p>
                                </div>
                                <span>$2.50</span>
                            </div>
                            <div className="select">
                                <div className="name">
                                    <input type="checkbox" name="test" />
                                    <p>Extra Maple Syrup</p>
                                </div>
                                <span>$2.00</span>
                            </div>
                        </div>
                        <div className="add-cart-btn">
                            <Button className="button">ADD TO CART<span>$16.99</span></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailedFoodPhoneScreen;