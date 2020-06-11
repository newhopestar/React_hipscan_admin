import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from 'react-bootstrap/Button';
import './Home.css';
import HomeImage from '../../assets/images/home1.jpg';
import RestaurantImage from '../../assets/images/restaurant.jpg';
import RetailImage from '../../assets/images/retail.jpg';
import QRCode from '../../assets/images/qr-code.png';
//var QRCode = require('qrcode.react');

class Home extends React.Component {
    constructor(props)
    {
        super(props);
        console.log("props", props)
        this.signHandleClick=this.signHandleClick.bind();
    }
    signHandleClick = () => {this.props.history.push("/signup");}

    render()
    {
        return(
            <div className=" homepage">
                <div className="top-section">
                    <img src={HomeImage} className="home-image" alt="homeimage"/>
                    <Header {...this.props}/>
                    <div className="container home">
                        <div className="home-title-container">
                            <h1 className="title">Connect the real<br/> world to your digital<br/> identity</h1>
                            <p className="description">A Hipscan sends mobile devices to your website, a video, your menu or anything else online. The best part is that you can change it anytime you want!</p>
                            <Button className="button" onClick={this.signHandleClick}>CREATE YOUR HIPSCAN TODAY, IT’S FREE!</Button>
                        </div>
                        <div className="qrcode">
                         <img src={ QRCode } alt="qrcode"/>
                        </div>
                    </div>
                    
                </div>
                <div className="container how-home">
                    <div className="how-title">
                        <h1>How Hipscan works:</h1>
                    </div>
                    <div className="how-description">
                        <div className="description-section">
                            <h1><span className="number">1</span>CREATE A HIPSCAN</h1>
                            <div className="description-sub">
                                <p>Choose what you’d like to share with your customers; a web page, your menu or perhaps a product video.  You can change the destination of your Hipscan anytime you want.</p>
                            </div>
                        </div> 
                        <div  className="description-section">
                            <h1><span className="number">2</span><span>WATCH AND LEARN</span></h1>
                            <div className="description-sub">
                                 <p>Every time someone scans your dynamic Hipscan, we’ll instantly direct them to the information you want them to see.  As we do this, we make note of when, where and with what device they scanned your Hipscan.</p>
                            </div>
                        </div> 
                        <div className="description-section">
                            <h1><span className="number">3</span>YOU'RE IN CONTROL</h1>
                            <div className="description-sub">
                                 <p>Our analytics tools use this information to help you understand your customer behavior and monitor the effectiveness of your campaigns.</p>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="mid-home">
                    <div className="container">
                        <p> AMPLIFY YOUR REACH. INSPIRE YOUR AUDIENCE.</p>
                        <h1>Use Hipscan to interact with your <br/> customers while being "touchless".</h1>
                        <span>Hipscan helps brick & mortar businesses use technology to interact with their customers in<br/> an effective, safe and revenue-producing fashion.</span>
                    </div>
                </div>
                <div className = "bottom-home-wrapper">
                    <div className="bottom-home">
                        <div className="restaurant-image">
                            <div className = "fade"></div>
                            <img src={RestaurantImage} className="restaurant" alt="restaurantimage"/>
                            <div className="hipscan">
                                <h1>Hipscan for<br/> Restaurants</h1>
                                <p>Restauranteurs are able to create a Hipscan and connect it to a menu, allowing their guests to place an order on their own mobile phones.  Call it touchless ordering.  Call it interactive without interacting.</p>
                            </div>
                            </div>
                        <div className="retail-image">
                             <div className = "fade"></div>
                            <img src={RetailImage} className="retail" alt="retailimage"/>
                            <div className="hipscan">
                                <h1>Hipscan for <br/> Retail</h1>
                                <p>Store owners and managers are able to create a Hipscan and connect it to a product page, a product video or a website page allowing their guests to learn about a product and place an order on their own mobile phones.  Call it being interactive without interacting.</p>
                            </div>
                        </div>
                    </div>
                    <Button className = "aa-btn"  onClick={this.signHandleClick}>CREATE YOUR HIPSCAN TODAY, IT'S FREE!</Button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;

