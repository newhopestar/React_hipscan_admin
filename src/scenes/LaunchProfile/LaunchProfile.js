import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhotoVideo } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { GiOpenFolder } from 'react-icons/gi';
import Iframe from 'react-iframe'

import Header2 from '../../components/Header2/Header2';
import Statistics from '../../components/Statistics/Statistics';
import ProfilePhone from '../../components/ProfilePhone/ProfilePhone';
import ContactInfoModal from '../../components/ContactInfoModal/ContactInfoModal';

import './LaunchProfile.css';

import QRCodeImage from '../../assets/images/qr-code.png';
import PhoneFrame from '../../assets/images/phone-frame.png';
import Handshake from '../../assets/images/handshake.jpg';

class LaunchProfile extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:"Display Name",
            description:"Description of Product",
            show:false,
            selectedFile:null,
            selectedBFile: null,

            //from child
            c_email:"contact@gmail.com",
            c_number:"+1 5678 54367",
            c_website:"",
            c_facebook:"",
            c_twitter:"",
            c_instagram:"",
            c_videoURL:""

        }
        this.nameChangeHandle=this.nameChangeHandle.bind(this);
        this.descriptionChangeHandle=this.descriptionChangeHandle.bind(this);
        this.modalShow=this.modalShow.bind(this);
        this.modalHide=this.modalHide.bind(this);
        this.upload= this.upload.bind(this);
        this.fileSelectHandle =  this.fileSelectHandle.bind(this);

        this.emailHandle = this.emailHandle.bind(this);
        this.numberHandle = this.numberHandle.bind(this);
        this.websiteHandle = this.websiteHandle.bind(this);
        this.facebookHandle = this.facebookHandle.bind(this);
        this.twitterHandle = this.twitterHandle.bind(this);
        this.instagramHandle = this.instagramHandle.bind(this);
        this.videoURL = this.videoURL.bind(this);
    }

    nameChangeHandle(e){ this.setState({ name:e.target.value  }) }
    descriptionChangeHandle(e){  this.setState({description:e.target.value}); }
    
    modalShow() {this.setState({show: true});}
    modalHide() {this.setState({show: false});}

    upload() { document.getElementById("selectImage").click() }
    fileSelectHandle(e){  this.setState({ selectedFile:e.target.files[0]}) }

    emailHandle(ee) { this.setState({ c_email:ee })};
    numberHandle(ee) { this.setState({ c_number:ee })};
    websiteHandle(ee) { this.setState({ c_website:ee })};
    facebookHandle(ee) { this.setState({ c_facebook:ee })};
    twitterHandle(ee) { this.setState({ c_twitter:ee })};
    instagramHandle(ee) { this.setState({ c_instagram:ee })};
    videoURL(ee) { this.setState({ c_videoURL:ee })};
    onChangeBFile = (ee) => { this.setState({selectedBFile: ee}) }
    render(){
        return(
            <div className="launch-profile">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <Link to="/dashboard" className="goto"><IoIosArrowBack size="1.3rem"/>Back to dashboard</Link>
                            <h1>Launch Hipscan Profile</h1>
                            <p>Hipscan Profiles are digital business cards-they provide your most essential contact details to anyone who scans your hipscan(<span>see example</span>)</p>
                            <div className="input-field">
                                <div className="file-upload" >
                                    <input id="selectImage" type="file" hidden placeholder="Upload Photo" onChange={this.fileSelectHandle}></input>
                                    <span>{this.state.selectedFile && this.state.selectedFile.name!==null ? this.state.selectedFile.name :"Upload photo"}</span>
                                    <div className="icon" onClick={this.upload}><GiOpenFolder size="2.5rem" /></div>
                                </div>
                                <div className="common-input" >
                                    <input type="text" placeholder="Display Name" onChange={this.nameChangeHandle}></input>
                                </div>
                            </div>
                            <div className="textarea-input">
                                <textarea id="#" placeholder="Please enter Description" onChange={this.descriptionChangeHandle} />
                            </div>
                            <div className="contact-info-btn">
                                <Button onClick={this.modalShow}>CONTACT INFO</Button>
                                <ContactInfoModal show={this.state.show} modalHide={this.modalHide}
                                                onChangeEmail= {this.emailHandle}
                                                onChangeNumber={this.numberHandle}
                                                onChangeWebsiteURL={this.websiteHandle}
                                                onChangeFacebookURL={this.facebookHandle}
                                                onChangeInstagramURL={this.instagramHandle}
                                                onChangeTwitterURL={this.twitterHandle}
                                                onChangeVideoURL={this.videoURL}
                                                onChangeBFile   = {this.onChangeBFile}
                                />
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
                                <ProfilePhone name={this.state.name}
                                              description={this.state.description} 
                                              file={this.state.selectedFile}
                                              bFile={this.state.selectedBFile}
                                              c_email={this.state.c_email} 
                                              c_number={this.state.c_number} 
                                              c_website={this.state.c_website} 
                                              c_facebook={this.state.c_facebook} 
                                              c_instagram={this.state.c_instagram} 
                                              c_twitter={this.state.c_twitter} 
                                              c_videoURL={this.state.c_videoURL} 
                                />    
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

export default LaunchProfile;