import React from 'react';
import './ContactInfoModal.css';
import { Modal,Button } from 'react-bootstrap';
import { GiOpenFolder } from 'react-icons/gi';
import { FaDribbble, FaFacebookF,FaTwitter,FaInstagram,FaRegPlayCircle } from 'react-icons/fa'
import { TiSocialYoutubeCircular, TiSocialVimeoCircular } from 'react-icons/ti'

class ContactInfoModal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedFile:null,
            c_email:"",
            c_number:"",
            c_websidte:"",
            c_facebook:"",
            c_instagram:"",
            c_twitter:"",
            c_videoURL:""
        }
        this.upload= this.upload.bind(this);
        this.fileSelectHandle =  this.fileSelectHandle.bind(this);

        this.emailHandle = this.emailHandle.bind(this);
        this.numberHandle =  this.numberHandle.bind(this);
        this.websiteURLHandle =  this.websiteURLHandle.bind(this);
        this.facebookURLHandle =  this.facebookURLHandle.bind(this);
        this.instagramURLHandle =  this.instagramURLHandle.bind(this);
        this.twitterURLHandle =  this.twitterURLHandle.bind(this);
        this.addressHandle =  this.addressHandle.bind(this);
       
    }

    upload() { document.getElementById("contact_info_selectImage").click() }
    fileSelectHandle(e){  
        this.setState({ selectedFile:e.target.files[0]}) 
        this.props.onChangeBFile( e.target.files[0] )
    }

    emailHandle(e) { this.props.onChangeEmail(e.target.value)};
    numberHandle(e) { this.props.onChangeNumber(e.target.value)};
    websiteURLHandle(e) {  this.props.onChangeWebsiteURL(e.target.value)};
    facebookURLHandle(e) {  this.props.onChangeFacebookURL(e.target.value)};
    instagramURLHandle(e) {  this.props.onChangeInstagramURL(e.target.value)};
    twitterURLHandle(e) {  this.props.onChangeTwitterURL(e.target.value)};
    videoURLHandle(e) {  this.props.onChangeVideoURL(e.target.value)};
    addressHandle(e) {  this.props.onChangeAddress(e.target.value)};

    render(){
        return(
            <Modal
                show={this.props.show}
                onHide={() => this.props.modalHide()}
                dialogClassName="modal-container"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Contact Infomation
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-field">
                        <div className="image-upload">
                            <input id="contact_info_selectImage" type="file" hidden placeholder="Upload Photo" onChange={this.fileSelectHandle}></input>
                            <span>{this.state.selectedFile && this.state.selectedFile.name!==null ? this.state.selectedFile.name :"Upload photo"}</span>
                            <div className="icon" onClick={this.upload}><GiOpenFolder size="2.5rem" /></div>
                        </div>
                        {
                            this.props.isAddress && <div className="address">
                                <input type="text" placeholder="Address" onChange={this.addressHandle}/>
                            </div>
                        }
                        <div className="email-phone">
                            <div className="email">
                                <input placeholder="Email Address" onChange={this.emailHandle}/>
                            </div>
                            <div className="phone">
                                <input placeholder="Phone Number" onChange={this.numberHandle}/>
                            </div>
                        </div>
                        <div className="website-facebook">
                            <div className="website">
                                <input placeholder="Website" onChange={this.websiteURLHandle}/>
                                <FaDribbble className="icon" size="1.9rem"/>
                            </div>
                            <div className="facebook">
                                <input placeholder="Facebook" onChange={this.facebookURLHandle}/>
                                <FaFacebookF className="icon" size="1.9rem"/>
                            </div>
                        </div>
                        <div className="instagram-twitter">
                            <div className="instagram">
                                <input placeholder="Instagram @username" onChange={this.instagramURLHandle} />
                                <FaInstagram className="icon" size="1.9rem"/>
                            </div>
                            <div className="twitter">
                                <input placeholder="Twitter" onChange={this.twitterURLHandle}/>
                                <FaTwitter className="icon" size="1.9rem" />
                            </div>
                        </div>
                        {
                            !this.props.isAddress && <div className="video">
                                <input type="text" placeholder="Insert YouTube or Vimeo URL" onChange={this.videoURLHandle}></input>
                                <div className="icon1"><TiSocialYoutubeCircular size="2.5rem"/></div>
                                <div className="icon2"><TiSocialVimeoCircular size="2.5rem"/></div>
                            </div>
                        }
                        <div className="save-btn">
                            <Button onClick={() => this.props.modalHide()}>SAVE</Button>
                        </div>
                    </div>
                    <div className="image-preview">
                        <div className="image">
                            { this.state.selectedFile && this.state.selectedFile !=="" ?
                            <img className="selectedImage"src={ URL.createObjectURL(this.state.selectedFile)} /> 
                        :
                        <p>background image preview</p>
                        }
                            
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}

export default ContactInfoModal;