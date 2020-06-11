import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import './Header2.css';
import logo from '../../assets/images/logo.svg';
import Button from 'react-bootstrap/Button';
import { logout } from '../../services/auth/authActions';
import { bindActionCreators } from 'redux';

class Header2 extends React.Component {
    constructor(props)
    {
        super(props);

        this.logoutHandleClick = this.logoutHandleClick.bind(this);
        this.myHipscans = this.myHipscans.bind(this);
    }
    logoutHandleClick=()=>{
        this.props.authActions.logout();
        this.props.history.push("/");
    };
    myHipscans=()=>{this.props.history.push("/myhipscans")};

    render() {
        
        return(
            <div className="header2bar">
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                    Username
                    </div>
                    <p onClick={this.myHipscans}>My Hipscans</p>
                    <div className="logout">
                        <Button onClick={this.logoutHandleClick} className="logout-btn"> Logout </Button>
                    </div>
                </div>
                <div className="underline">
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.default.services.auth
    }),
    dispatch => ({
        authActions: bindActionCreators({ logout }, dispatch)
    })
)(Header2);