import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Button,Form } from 'react-bootstrap';
import './Login.css';
import SignupImage from '../../assets/images/signup-background.jpg';
import { FaFacebookF,FaGoogle} from 'react-icons/fa';

import Swal from 'sweetalert2';

//import actions
import { login } from '../../services/auth/authActions';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: "",
            password: "",
          }

        this.change=this.change.bind(this);
        this.handleLoginClick=this.handleLoginClick.bind(this);
    }
   componentDidUpdate(prevProps) {
        if( this.props.error !== prevProps.error && this.props.error != null) {
           toastr.error('Failed',this.props.error);
       }
       if(this.props.success !== prevProps.success && this.props.success ===true) {
           toastr.success('Success', this.props.message);
       }
   }

    change = (e) => { this.setState({ [e.target.name]:e.target.value});  }
    
    handleLoginClick = () => {
        const { login, password } = this.state;
        this.props.authActions.login( login, password );
    }
    render ()
    {  
        if (localStorage.getItem("token")!=null) {
            return (
              <Redirect
                to={{
                  pathname: '/dashboard'
                }}
              />
            );
          }
        
        return(
            <div className="login-home">
                <div className="login-section">
                    <img src={SignupImage} className="login-image" alt="loginimage"/>
                    <Header {...this.props}/>
                    <div className="container" id="high">
                        <div className="home">
                            <h1>Login to Hipscan</h1>
                            <div className="info-input">
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" name="login" placeholder="Username/Email" onChange={this.change}/>
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.change} />
                                    </Form.Group>
                                    <Button className="login-btn" onClick={this.handleLoginClick}>LOGIN</Button>
                                </Form>
                            </div>
                            <div className="login-title">
                                <p>LOGIN WITH SOCIAL</p>
                                <div className="line"></div>
                            </div>
                            <div className="social-login">
                                <Button className="google-login"><FaGoogle size="1.6em"/> LOGIN WITH GOOGLE</Button>
                                <Button className="facebook-login"><FaFacebookF size="1.8em"/> LOGIN WITH FACEBOOK</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.default.services.auth
    }),
    dispatch => ({
        authActions: bindActionCreators({ login }, dispatch)
    })
)(Login);