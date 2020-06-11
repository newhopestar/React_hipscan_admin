import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosArrowBack,IoIosInformationCircle } from 'react-icons/io';
import './DisplayText.css';
import QRCodeImage from '../../assets/images/qr-code.png';
import PhoneFrame from '../../assets/images/phone-frame.png';
import Header2 from '../../components/Header2/Header2';
import Statistics from '../../components/Statistics/Statistics';

class DisplayText extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            text:""
        }
        this.textChange=this.textChange.bind(this);
    }

    textChange(e){
        this.setState({
            text:e.target.value
        })
    }
    render(){
        return(
            <div className="display-text">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <Link to="/dashboard" className="goto"><IoIosArrowBack size="1.3rem"/>Back to dashboard</Link>
                            <h1>Display Custom Text</h1>
                            <div className="display-custom-text">
                                <textarea id="#" onChange={this.textChange} />
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
                                {this.state.text!=="" ?
                                    <div >
                                        <IoIosInformationCircle className="icon" size="2.5rem"/>
                                        <div className="preview-text">
                                            {this.state.text}
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <IoIosInformationCircle className="icon" size="2.5rem"/>
                                        <h5>Custom Text for Preview</h5>
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

export default DisplayText;