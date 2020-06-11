import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhotoVideo } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import Iframe from 'react-iframe'
import './LaunchUrl.css';
import QRCodeImage from '../../assets/images/qr-code.png';
import PhoneFrame from '../../assets/images/phone-frame.png';
import Header2 from '../../components/Header2/Header2';
import Statistics from '../../components/Statistics/Statistics';

class LaunchUrl extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            inputURL:""
        }
        this.inputURLHandle=this.inputURLHandle.bind(this);
    }

    inputURLHandle(e){
        this.setState({
            inputURL:e.target.value
        })
    }
    render(){
        return(
            <div className="launch-url">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <Link to="/dashboard" className="goto"><IoIosArrowBack size="1.3rem"/>Back to dashboard</Link>
                            <h1>Launch Custom URL</h1>
                            <input type="text" placeholder="http://some.website.com/directory/subdirectory/..." onChange={this.inputURLHandle}></input>
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
                                {this.state.inputURL!=="" ?
                                    <Iframe url={this.state.inputURL}
                                    width="100%"
                                    height="100%"
                                    id="myId"
                                    display="initial"
                                    position="relative"/> 
                                    :
                                    <div>
                                        <FaPhotoVideo className="icon" size="2.5rem"/>
                                        <h5>Enter URL for Preview</h5>
                                    </div>
                                }
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

export default LaunchUrl;