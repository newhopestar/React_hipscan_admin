import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaPhotoVideo } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { GiOpenFolder } from 'react-icons/gi';
import './DisplayImage.css';
import QRCodeImage from '../../assets/images/qr-code.png';
import PhoneFrame from '../../assets/images/phone-frame.png';
import Header2 from '../../components/Header2/Header2';
import Statistics from '../../components/Statistics/Statistics';

class DisplayImage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            selectedFile:null
        }
        this.upload= this.upload.bind(this);
        this.fileSelectHandle =  this.fileSelectHandle.bind(this);
    }

    upload() { document.getElementById("selectImage").click() }
    fileSelectHandle(e){  this.setState({ selectedFile:e.target.files[0]}) }
  
    render(){
        return(
            <div className="display-image">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <Link to="/dashboard" className="goto"><IoIosArrowBack size="1.3rem"/>Back to dashboard</Link>
                            <h1>Display Custom Image</h1>
                            <div className="display-custom-image">
                                <input id="selectImage" type="file" hidden placeholder="Upload Photo" onChange={this.fileSelectHandle}></input>
                                <span>{this.state.selectedFile && this.state.selectedFile.name!==null ? this.state.selectedFile.name :"Upload photo"}</span>
                                <div className="icon" onClick={this.upload}><GiOpenFolder size="2.5rem" /></div>
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
                                {this.state.selectedFile!==null ?
                                     <img className="image-preview" src={URL.createObjectURL(this.state.selectedFile)} alt="upload image"/>
                                    :
                                    <div>
                                        <FaPhotoVideo className="icon" size="2.5rem"/>
                                        <h5>Upload Image for Preview</h5>
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

export default DisplayImage;