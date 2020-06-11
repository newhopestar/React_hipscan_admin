import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.svg';
import Button from 'react-bootstrap/Button';
//import { history } from '../../store';

class Header extends React.Component {
    constructor(props)
    {
        super(props);

       this.signHandleClick=this.signHandleClick.bind();
       this.loginHandleClick= this.loginHandleClick.bind();
    }
    
    signHandleClick = () => {this.props.history.push("/signup");}
    loginHandleClick= () => {this.props.history.push("/login");}
    render() {
        return (
            <div className = "container headerbar">
                <div className = "header"> 
                    <div className = "header-wrapper">
                        <div className = "logo">
                            <NavLink className="nav" to = {`/`}>
                              <img src={logo} alt="logo"/>
                            </NavLink>
                        </div>
                        <div className = "login">
                            <Button onClick={this.loginHandleClick} variant="light" className="login-button"> LOGIN </Button> 
                            <Button onClick={this.signHandleClick} className="signup-button">SIGN UP</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;