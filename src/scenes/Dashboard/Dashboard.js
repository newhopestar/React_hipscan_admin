import React from 'react';
import { Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import './Dashboard.css';

import Header2 from '../../components/Header2/Header2';
import Statistics from '../../components/Statistics/Statistics';

import QRCodeImage from '../../assets/images/qr-code.png';
import PhoneFrame from '../../assets/images/phone-frame.png';

//import actions
import { getProfile } from '../../services/profile/profileActions';
var QRCode = require('qrcode.react');

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            qrcolor:"black",
        }
        this.qrColorHandle=this.qrColorHandle.bind(this);
      
    }

    componentWillMount() {
        this.props.profileActions.getProfile();
    }
    qrColorHandle( color ) { this.setState({qrcolor:color})}
  
    downloadQR = (type) => {
        const canvas = document.getElementById("qr");
        const Url = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = Url;
        downloadLink.download = `qr.${type}`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      };

    render()
    {
        console.log("Profile", this.props);
        return(
            <div className="dashboard">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <div className="qr-code">
                                <div className="label">
                                    <p>Main Hipscan</p>
                                </div>
                                <div className="qrcodeimage">
                                    <img src={this.props.profile && this.props.profile.code && this.props.profile.code.code_image_url ?this.props.profile.code.code_image_url:''} id="qr"  fgColor={this.state.qrcolor} />,
                                </div>
                                <div className="color4">
                                    <div className="black" onClick={() => this.qrColorHandle('black')} ></div>
                                    <div className="green" onClick={() => this.qrColorHandle('#00b300')}></div>
                                    <div className="red" onClick={() => this.qrColorHandle('#820606')}></div>
                                    <div className="blue" onClick={() => this.qrColorHandle('#030369')}></div>
                                </div>
                                <div className="download-btn">
                                    <Button className="btn" onClick={() => this.downloadQR('png')}><FaDownload/> PNG</Button>
                                    <Button className="btn" onClick={() => this.downloadQR('jpg')}><FaDownload/> JPG</Button>
                                    <Button className="btn" onClick={() => this.downloadQR('eps')}><FaDownload/> EPS</Button>
                                </div>
                            </div>
                            <div className="info-input">
                                <h1>Awesome! So, what will your Hipscan do?</h1>
                                <p>(Don't worry -- your can change this any time your want)</p>
                                <div className="action-btns">
                                    <Button className={ this.props.profile && this.props.profile.code && this.props.profile.code.type === "url"? "action-btn active":"action-btn"} onClick={()=>this.props.history.push('/launch-url')}>Launch Custom URL</Button>
                                    <Button className={ this.props.profile && this.props.profile.code && this.props.profile.code.type === "profile"? "action-btn active":"action-btn"} onClick={()=>this.props.history.push('/launch-profile')}>Launch your Hipscan Profile</Button>
                                    <Button className={ this.props.profile && this.props.profile.code && this.props.profile.code.type === "text"? "action-btn active":"action-btn"} onClick={()=>this.props.history.push('/display-text')}>Display Custom Text</Button>
                                    <Button className={ this.props.profile && this.props.profile.code && this.props.profile.code.type === "image"? "action-btn active":"action-btn"} onClick={()=>this.props.history.push('/display-image')}>Display a Custom Image</Button>
                                    <Button className={ this.props.profile && this.props.profile.code && this.props.profile.code.type === "video"? "action-btn active":"action-btn"} onClick={()=>this.props.history.push('/launch-video')}>Launch a Video</Button>
                                    <Button className={ this.props.profile && this.props.profile.code && this.props.profile.code.type === "menu"? "action-btn active":"action-btn"} onClick={()=>this.props.history.push('/launch-menu')}>Launch a Menu</Button>
                                    <Button className={ this.props.profile && this.props.profile.code && this.props.profile.code.type === "product"? "action-btn active":"action-btn"} onClick={()=>this.props.history.push('/launch-product')}>Launch a Product Page</Button>
                                </div>
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
                                <p>Go ahead and pick a destination and input where you want it to point</p>
                                <span>A preview will show here</span>
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

export default connect(
    state => ({
        ...state.default.services.profile
    }),
    dispatch => ({
        profileActions: bindActionCreators({ getProfile }, dispatch)
    })
)(Dashboard);