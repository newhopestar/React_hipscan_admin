import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegPlayCircle,FaRegEye } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { TiSocialYoutubeCircular, TiSocialVimeoCircular } from 'react-icons/ti'
import Iframe from 'react-iframe'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './MyHipscans.css';
import QRCodeImage from '../../assets/images/qr-code.png';
import PhoneFrame from '../../assets/images/phone-frame.png';
import MenuBg from '../../assets/images/menu-phone-bg.jpg';
import Header2 from '../../components/Header2/Header2';
import Statistics from '../../components/Statistics/Statistics';
import { MdEdit } from 'react-icons/md';
import { FaTrashAlt } from 'react-icons/fa';
//import actions
import { getHipscans } from '../../services/profile/profileActions';
import { showModal } from '../../modals/ModalConductorActions';

const qrData = [
    { "qr": "aaa", "label":"Main Hipscan"},
    { "qr": "bbb", "label":"Hacienda_Location"},
    { "qr": "ccc", "label":"Brooklyn_Location"}
]
class MyHipscans extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            myHipscans:'',
            videoURL:"",
            hipscanPreview:"",
            editHipscan: false,
            editHipscan2: false,
            mainHipscanLabel: "Main Hipscan",
            secondHipscanLabel: "Hacienda_Location",
            thirdHipscanLabel : "Brooklyn_Location",

            eyeState:false,
            eyeState2:false,
        }
        this.createHipscan=this.createHipscan.bind(this);
        this.eyeHipscan = this.eyeHipscan.bind(this);
        this.eyeHipscan2 = this.eyeHipscan2.bind(this);

        this.editHaciendaLocation=this.editHaciendaLocation.bind(this);
        this.inputHandle=this.inputHandle.bind(this);

        this.editHaciendaLocatio2=this.editHaciendaLocation2.bind(this);
        this.inputHandle2=this.inputHandle2.bind(this);
     
    }

    componentWillMount() {
        this.props.profileActions.getHipscans();
    }
   
    componentDidUpdate(prevProps, prevState)
    {
        if(prevProps.myHipscans != this.props.myHipscans )
        {
            this.setState({ myHipscans: this.props.myHipscans });
        }
    }


    createHipscan=()=>{this.props.history.push("/dashboard")};

    editHaciendaLocation=() => { this.setState({editHipscan: !this.state.editHipscan}) };
    inputHandle(e){ this.setState({  mainHipscanLabel:e.target.value  })}

    editHaciendaLocation2=() => { this.setState({editHipscan2: !this.state.editHipscan2}) };
    inputHandle2(e){ this.setState({  secondHipscanLabel:e.target.value  })}

    eyeHipscan=() => {this.setState({ eyeState : !this.state.eyeState })};

    render(){
        console.log("myhipscans" , this.props.myHipscans)
        const { myHipscans } = this.state;
      
        return(
            <div className="my-hipscans">
                <div className="hipscan">
                    <div className="action-part">
                        <img src={QRCodeImage} className="action-image" alt="qrimage"/>
                        <Header2 {...this.props}/>
                        <div className="action">
                            <div className="title">
                                <h1>My Hipscans</h1>
                                <p>Manage all your hipscans here. Please note that each account has a limit of 25 Hipscans.</p>
                            </div>
                            <div className="new-create-btn">
                                <Button onClick={()=>this.props.modalActions.showModal('ADD_HIPSCAN')}>CREATE NEW HIPSCAN</Button>
                            </div>
                        </div>
                        <div className="qr-s">
                            { myHipscans && myHipscans.length > 0 ?  myHipscans.map((item, index) =>  (
                                    <div key={index} className="qr-first" >
                                        <img className={(this.state.eyeState===true?"active":"")} src= { item && item.code_image_url ? item.code_image_url : '' } alt="qr" onClick={ this.eyeHipscan }/>
                                        {this.state.editHipscan == false ? 
                                            <div className="label">
                                                <p>{ item.label && item.label!==""? item.label:'' }</p>
                                            </div> 
                                            :
                                            <div className="label">
                                                <input  type="text" onChange = { this.inputHandle }></input>
                                            </div> 
                                        }
                                        <div className="eye-edit">
                                            <FaRegEye className="eye" size="1.4rem" onClick={ this.eyeHipscan } />
                                            <MdEdit className="edit" size="1.4rem" onClick={this.editHaciendaLocation}/>
                                            { item.main && item.main !==true ?
                                            <FaTrashAlt className="delete" size="1.4rem"/> : <div></div>
                                            }
                                        </div>
                                    </div>
                                )) : ''
                            }
                        </div>
                    </div>
                    <div className="preview-part">
                        <div className="title">
                            <p>SCREEN PREVIEW</p>
                        </div>
                        <div className="phone-frame">
                            <img src={PhoneFrame} className="phone" alt=""/>
                            <div className="phone-screen">
                                <img src={MenuBg} className="background" alt="background"/>
                                <FaRegPlayCircle className="icon" size="2.5rem"/>
                                { this.state.hipscanPreview && this.state.hipscanPreview!="" ? <h5>{this.state.hipscanPreview}</h5>:<h5>View Video Preview</h5>}
                               
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
        profileActions: bindActionCreators({ getHipscans }, dispatch),
        modalActions: bindActionCreators({ showModal }, dispatch)
    })
)(MyHipscans);
