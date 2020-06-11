import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { GiOpenFolder } from 'react-icons/gi';
import { TiSocialYoutubeCircular, TiSocialVimeoCircular } from 'react-icons/ti'
import Iframe from 'react-iframe'
import './LaunchProduct.css';
import QRCodeImage from '../../assets/images/qr-code.png';
import PhoneFrame from '../../assets/images/phone-frame.png';
import Header2 from '../../components/Header2/Header2';
import Statistics from '../../components/Statistics/Statistics';
import ProductPhone from '../../components/ProductPhone/ProductPhone';

class LaunchProduct extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            productName:"Product Name",
            productPrice:"$---",
            videoURL:"",
            description:"Product description",
            selectedFile:null

        }
        this.nameChange=this.nameChange.bind(this);
        this.priceChange = this.priceChange.bind(this);
        this.videoURLChange=this.videoURLChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.upload= this.upload.bind(this);
        this.fileSelectHandle =  this.fileSelectHandle.bind(this);
    }
    nameChange(e){ this.setState({ productName: e.target.value})};
    priceChange(e){ this.setState({ productPrice: e.target.value})};
    videoURLChange(e){ this.setState({ videoURL: e.target.value})};
    descriptionChange(e){ this.setState({ description: e.target.value})};
    upload() { document.getElementById("product_selectImage").click() }
    fileSelectHandle(e){  this.setState({ selectedFile:e.target.files[0]}) }

    render(){
        return(
            <div className="launch-product">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <Link to="/dashboard" className="goto"><IoIosArrowBack size="1.3rem"/>Back to dashboard</Link>
                            <h1>Launch a Product</h1>
                            <div className="product-img-upload">
                                <input id="product_selectImage" type="file" hidden placeholder="Upload Photo" onChange={this.fileSelectHandle}></input>
                                <span>{this.state.selectedFile && this.state.selectedFile.name!==null ? this.state.selectedFile.name :"Upload photo"}</span>
                                <div className="icon" onClick={this.upload}><GiOpenFolder size="2.5rem" /></div>
                            </div>
                            <div className="product">
                                <div className="product-name">
                                    <input id="" placeholder="Product name" onChange={this.nameChange}/>
                                </div>
                                <div className="product-price">
                                    <input id="" placeholder="$" onChange={this.priceChange}/>
                                </div>
                            </div>
                            <div className="display-video">
                                <input type="text" placeholder="Insert YouTube or Vimeo URL" onChange={this.videoURLChange}></input>
                                <div className="icon1"><TiSocialYoutubeCircular size="2.5rem"/></div>
                                <div className="icon2"><TiSocialVimeoCircular size="2.5rem"/></div>
                            </div>
                            <div className="product-description">
                                <textarea placeholder="description of production" onChange={this.descriptionChange}/>
                            </div>
                            <div className="save-continue-btn">
                                <Button>SAVE AND CONTINUE</Button>
                            </div>
                        </div>
                    </div>
                    <div className="preview-part">
                        <div className="title">
                            <p>SCREEN PREVIEW</p>
                        </div>
                        <div className="phone-frame">
                            <img src={PhoneFrame} className="phone" alt=""/>
                            <div className="phone-screen">
                                <ProductPhone productName={this.state.productName} 
                                    productPrice={this.state.productPrice} 
                                    videoURL={this.state.videoURL}
                                    description={this.state.description}
                                    fileUpload= {this.state.selectedFile} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="statistics">
                    <Statistics/>
                </div>
            </div>
        )
    }
}

export default LaunchProduct;