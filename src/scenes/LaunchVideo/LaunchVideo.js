import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegPlayCircle } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { TiSocialYoutubeCircular, TiSocialVimeoCircular } from 'react-icons/ti'
import Iframe from 'react-iframe';
import ReactPlayer from 'react-player'
import './LaunchVideo.css';
import QRCodeImage from '../../assets/images/qr-code.png';
import PhoneFrame from '../../assets/images/phone-frame.png';
import Header2 from '../../components/Header2/Header2';
import Statistics from '../../components/Statistics/Statistics';

class LaunchVideo extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            videoURL:""
        }
        this.videoURLChange=this.videoURLChange.bind(this);
    }

    videoURLChange(e){
        this.setState({
            videoURL:e.target.value
        })
    }
    render(){
        return(
            <div className="launch-video">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <Link to="/dashboard" className="goto"><IoIosArrowBack size="1.3rem"/>Back to dashboard</Link>
                            <h1>Launch a Video</h1>
                            <div className="display-video">
                                <input type="text" placeholder="Insert YouTube or Vimeo URL" onChange={this.videoURLChange}></input>
                                <div className="icon1"><TiSocialYoutubeCircular size="2.5rem"/></div>
                                <div className="icon2"><TiSocialVimeoCircular size="2.5rem"/></div>
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
                                {this.state.videoURL!=="" ?
                                    <ReactPlayer url={this.state.videoURL} playing controls width="100%" height="100%" onPause/>
                                    :
                                    <div>
                                        <FaRegPlayCircle className="icon" size="2.5rem"/>
                                        <h5>View Video Preview</h5>
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

export default LaunchVideo;