import React from 'react';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import Iframe from 'react-iframe';
import './ProductPhoneScreen.css';

import Product from '../../assets/images/product.jpg';
import logo from '../../assets/images/logo.svg';

class ProductPhoneScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            productName:"Product Name",
            productPrice:"$---",
            videoURL:"",
            description:"Product description"
        }
    }

    render(){
        return(
            <div className="product-phone-screen">
                <div className="product-phone">
                    <div className="product-photo">
                        <img src={Product} alt="product"/>
                    </div>
                    <div className="product-name">
                        <p>{this.state.productName}</p>
                    </div>
                    <div className="price">
                        <h1>{this.state.productPrice}</h1>
                    </div>
                    <div className="description">
                        <p>{this.state.description}</p>
                    </div>
                    <div className="video-screen">
                        {this.state.videoURL!=="" ?
                            <Iframe url={this.state.videoURL}
                            width="100%"
                            height="100%"
                            id="myId"
                            display="initial"
                            position="relative"/> 
                            :
                            <FaRegPlayCircle className="play" size="2rem"/>
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

export default ProductPhoneScreen;