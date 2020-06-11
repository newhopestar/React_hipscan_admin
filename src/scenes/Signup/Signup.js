import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import { Button,Form } from 'react-bootstrap';
import { FaFacebookF,FaGoogle} from 'react-icons/fa';
//import components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import assets
import SignupImage from '../../assets/images/signup-background.jpg';
//import action
import { register } from '../../services/auth/authActions';
//import css
import './Signup.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            firstname:'',
            lastname:'',
            email:'',
            password:''
        }
        this.change= this.change.bind(this);
        this.handleSignClick = this.handleSignClick.bind(this);
    }
    componentDidUpdate(prevProps) {
        if( this.props.error !== prevProps.error && this.props.error != null) {
           toastr.error('Failed',this.props.error);
       }
       if(this.props.success !== prevProps.success && this.props.success ===true) {
           toastr.success('Success', this.props.message);
           window.location = "/login"; 
       }
    }

    change = (e) => { 
        this.setState({ [e.target.name]:e.target.value});
    }
    handleSignClick = () => {
        const data = this.state;
        if( data.username !=="" && data.firstname!=="" && data.lastname!=="" && data.email!=="" && data.password!=="") {
            let params = { username:data.username, firstname:data.firstname, lastname:data.lastname, email:data.email, password:data.password }
            this.props.authActions.register(params);
        } else {
            toastr.error('Failed',"User Data missing");
        }
    }
    render()
    {
        return(
            <div className="signup">
                <div className="signup-section">
                    <img src={SignupImage} className="signup-image" alt="signupimage"/>
                    <Header {...this.props}/>
                    <div className="container home">
                        <div className="description">
                            <h1>Go from the<br/>real world to<br/>the digital<br/>world in less<br/>than 5 minutes.</h1>
                            <p>Hipscan makes it easy to create a dynamic QR code and point it to a digital destination so that you can capture their attention when it matters.</p>
                            <span>Create an account today and see how easy it is to start to interact with your customers.</span>
                        </div>
                        <div className="input">
                            <h1>Sign up for free, now!</h1>
                            <div className="social-signup">
                                <Button className="google-signup"><FaGoogle size="1.6em"/> SIGN UP WITH GOOGLE</Button>
                                <Button className="facebook-signup"><FaFacebookF size="1.8em"/> SIGN UP WITH FACEBOOK</Button>
                             </div>
                             <div className="email-signup">
                                <p>OR SIGN UP WITH EMAIL</p>
                                <div className="line"></div>
                            </div>
                            <div className="info-input">
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" name="username" placeholder="Desired Username" onChange={ this.change } />
                                    </Form.Group>
                                    <Form.Row>
                                        <Form.Group controlId="exampleForm.ControlInput2">
                                            <Form.Control type="text" name="firstname" placeholder="First Name" onChange={ this.change } />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Control type="text" name="lastname" placeholder="Last Name" onChange={ this.change } />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" name="email" placeholder="Email Address" onChange={ this.change } />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control type="password" name="password" placeholder="Password" onChange={ this.change } />
                                    </Form.Group>
                                </Form>
                                <Button onClick={this.handleSignClick}>
                                    LET'S GO!
                                </Button>
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
        authActions: bindActionCreators({ register }, dispatch)
    })
)(Signup);
