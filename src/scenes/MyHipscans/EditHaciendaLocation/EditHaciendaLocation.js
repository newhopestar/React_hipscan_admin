import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhotoVideo } from 'react-icons/fa';
import { IoIosArrowBack,IoMdArrowDropdown } from 'react-icons/io';
import { GiOpenFolder } from 'react-icons/gi';
import Iframe from 'react-iframe'
import { SketchPicker } from 'react-color'
import './EditHaciendaLocation.css';
import QRCodeImage from '../../../assets/images/qr-code.png';
import PhoneFrame from '../../../assets/images/phone-frame.png';
import Header2 from '../../../components/Header2/Header2';
import Statistics from '../../../components/Statistics/Statistics';
import MenuPhone from '../../../components/MenuPhone/MenuPhone';
import ContactInfoModal from '../../../components/ContactInfoModal/ContactInfoModal';
import RestaurantMenuModal from '../../../components/RestaurantMenuModal/RestaurantMenuModal';

class EditHaciendaLocation extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            restaurantName:"Display Name",
            description:"Description of restaurant",
            show:false,
            menuShow:false,
            selectedFile:null,
            background:'#f36e21',
            displayColorPicker:false,

            selectedBFile: null,

            //from child
            c_email:"contact@gmail.com",
            c_number:"+1 5678 54367",
            c_website:"",
            c_facebook:"",
            c_twitter:"",
            c_instagram:"",
            c_address:"www.website.com"
        }
        this.restaurantNameHandle=this.restaurantNameHandle.bind(this);
        this.descriptionHandle=this.descriptionHandle.bind(this);
        this.modalShow=this.modalShow.bind(this);
        this.modalHide=this.modalHide.bind(this);
        this.menuModalShow =  this.menuModalShow.bind(this);
        this.menuModalHide =  this.menuModalHide.bind(this);
        this.upload= this.upload.bind(this);
        this.fileSelectHandle =  this.fileSelectHandle.bind(this);
        this.colorPickerHandle = this.colorPickerHandle.bind(this);

        this.emailHandle = this.emailHandle.bind(this);
        this.numberHandle = this.numberHandle.bind(this);
        this.websiteHandle = this.websiteHandle.bind(this);
        this.facebookHandle = this.facebookHandle.bind(this);
        this.twitterHandle = this.twitterHandle.bind(this);
        this.instagramHandle = this.instagramHandle.bind(this);
        this.addressHandle = this.addressHandle.bind(this);

    }

    restaurantNameHandle(e){ this.setState({ restaurantName:e.target.value })}
    descriptionHandle(e){ this.setState({ description:e.target.value});}
    modalShow() {this.setState({show: true});}
    modalHide() {this.setState({show: false});}
    menuModalShow() {this.setState({menuShow: true});}
    menuModalHide() {this.setState({menuShow: false});}

    upload() { document.getElementById("menu_selectImage").click() }
    fileSelectHandle(e){  this.setState({ selectedFile:e.target.files[0]}) }

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
      };
    colorPickerHandle() { this.setState({ displayColorPicker:!this.state.displayColorPicker})}
    handleClose = () => {
        this.setState({ displayColorPicker: false })
      };

    emailHandle(ee) { this.setState({ c_email:ee })};
    numberHandle(ee) { this.setState({ c_number:ee })};
    websiteHandle(ee) { this.setState({ c_website:ee })};
    facebookHandle(ee) { this.setState({ c_facebook:ee })};
    twitterHandle(ee) { this.setState({ c_twitter:ee })};
    instagramHandle(ee) { this.setState({ c_instagram:ee })};
    addressHandle(ee) { this.setState({ c_address:ee })};
    onChangeBFile = (ee) => { this.setState({selectedBFile: ee}) }

    render(){
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return(
            <div className="launch-menu">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <Link to="/dashboard" className="goto"><IoIosArrowBack size="1.3rem"/>Back to dashboard</Link>
                            <h1>Edit Hacienda_Location</h1>
                            <div className="input-field">
                                <div className="common-input" >
                                    <input type="text" placeholder="Restaurant Name" onChange={this.restaurantNameHandle} ></input>
                                </div>
                                <div className="file-upload" >
                                    <input id="menu_selectImage" type="file" hidden placeholder="Upload Photo" onChange={this.fileSelectHandle}></input>
                                    <span>{this.state.selectedFile && this.state.selectedFile.name!==null ? this.state.selectedFile.name :"Upload photo"}</span>
                                    <div className="icon" onClick={this.upload}><GiOpenFolder size="2.5rem" /></div>
                                </div>
                            </div>
                            <div className="textarea-input">
                                <textarea id="#" placeholder="Description of restaurant" onChange={this.descriptionHandle}/>
                            </div>
                            <div className="btns">
                                <div className="contact-info-btn">
                                    <Button onClick={this.modalShow}>CONTACT INFO</Button>
                                    <ContactInfoModal show={this.state.show} modalHide={this.modalHide} isAddress={true}
                                                      onChangeEmail= {this.emailHandle}
                                                      onChangeNumber={this.numberHandle}
                                                      onChangeWebsiteURL={this.websiteHandle}
                                                      onChangeFacebookURL={this.facebookHandle}
                                                      onChangeInstagramURL={this.instagramHandle}
                                                      onChangeTwitterURL={this.twitterHandle}
                                                      onChangeAddress={this.addressHandle}
                                                      onChangeBFile   = {this.onChangeBFile}  />
                                </div>
                                <div className="goto-menu-btn">
                                    <Button onClick={this.menuModalShow}>GO TO MENU</Button>
                                    <RestaurantMenuModal show={this.state.menuShow} modalHide={this.menuModalHide}/>
                                </div>
                                <div className="theme-select">
                                    <p>Theme Color</p>
                                    <div className="theme" >
                                        <input disabled style={{backgroundColor: this.state.background }}></input>
                                        
                                        <div className="icon" onClick={this.colorPickerHandle}><IoMdArrowDropdown size="2.5rem"/></div>
                                        {this.state.displayColorPicker? 
                                        <div className="picker">
                                            <div style={ cover } onClick={ this.handleClose }/>
                                            <SketchPicker
                                            color={ this.state.background }
                                            onChangeComplete={ this.handleChangeComplete }
                                            />
                                        </div>
                                        :
                                        null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="save-continue-btn">
                                <Button>SAVE AND EXIT</Button>
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
                               <MenuPhone restaurantName={this.state.restaurantName} description={this.state.description} uploadFile={this.state.selectedFile} themeColor={this.state.background}
                                           bFile={this.state.selectedBFile}
                                           c_email={this.state.c_email} 
                                           c_number={this.state.c_number} 
                                           c_website={this.state.c_website} 
                                           c_facebook={this.state.c_facebook} 
                                           c_instagram={this.state.c_instagram} 
                                           c_twitter={this.state.c_twitter} 
                                           c_address={this.state.c_address}   />
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

export default EditHaciendaLocation;