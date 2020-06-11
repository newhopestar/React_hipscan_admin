import React from 'react';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import Iframe from 'react-iframe';
import ReactPlayer from 'react-player';
import './ProductPhone.css';

import Product from '../../assets/images/product.jpg';
import logo from '../../assets/images/logo.svg';

class ProductPhone extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="product-phone-preview">
                <div className="product-photo">
                    { this.props.fileUpload && this.props.fileUpload !=="" ?
                    <img src={ URL.createObjectURL(this.props.fileUpload)}/> 
                    :
                    <img src={Product} alt="product"/>
                    }
                </div>
                <div className="product-name">
                    <p>{this.props.productName}</p>
                </div>
                <div className="price">
                    <h1>{this.props.productPrice}</h1>
                </div>
                <div className="description">
                    <p>{this.props.description}</p>
                </div>
                <div className="video-screen">
                    {this.props.videoURL!=="" ?
                         <ReactPlayer url={this.props.videoURL} playing width="100%" height="100%"/>
                        :
                        <FaRegPlayCircle className="play" size="1.2rem"/>
                    }
                </div>
                <div className="phone-footer">
                    <p>POWERED BY</p>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        )
    }
}

export default ProductPhone;