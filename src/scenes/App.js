import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

//Import Scenes
import Home from './Home/Home';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import MyHipscans from './MyHipscans/MyHipscans';
import EditHaciendaLocation from './MyHipscans/EditHaciendaLocation/EditHaciendaLocation';
import Dashboard from './Dashboard/Dashboard';
import LaunchUrl from './LaunchUrl/LaunchUrl';
import LaunchProfile from './LaunchProfile/LaunchProfile';
import DisplayText from './DisplayText/DisplayText';
import DisplayImage from './DisplayImage/DisplayImage';
import LaunchVideo from './LaunchVideo/LaunchVideo';
import LaunchMenu from './LaunchMenu/LaunchMenu';
import LaunchProduct from './LaunchProduct/LaunchProduct';

//Import Phone screen
import HomePhone from '../phone/HomePhone/HomePhone';
import ProfilePhoneScreen from '../phone/ProfilePhoneScreen/ProfilePhoneScreen';
import ProductPhoneScreen from '../phone/ProductPhoneScreen/ProductPhoneScreen';
import MenuCategoryPhoneScreen from '../phone/MenuCategoryPhoneScreen/MenuCategoryPhoneScreen';
import DetailedCategoryPhoneScreen from '../phone/DetailedCategoryPhoneScreen/DetailedCategoryPhonescreen';
import DetailedFoodPhoneScreen from '../phone/DetailedFoodPhoneScreen/DetailedFoodPhoneScreen';

import ModalConductor from '../modals/ModalConductor';
class App extends React.Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/" exact render= {props => <Home {...props}/>} />
            <Route path="/signup" render = {props=> <Signup {...props}/>} />
            <Route path="/login" render = {props=> <Login {...props}/>} />
            <Route path="/myhipscans" exact render ={ props => <MyHipscans {...props}/>}/>
            <Route path="/myhipscans/edit-hacienda-location" render = { props => <EditHaciendaLocation {...props}/>} />
            <Route path="/dashboard" render = { props=> <Dashboard {...props}/>} />
            <Route path="/launch-url" render = { props=> <LaunchUrl {...props}/>} />
            <Route path="/launch-profile" render = { props => <LaunchProfile {...props}/>}/>
            <Route path="/display-text" render = { props => <DisplayText {...props}/>} />
            <Route path="/display-image" render = { props => <DisplayImage {...props}/>} />
            <Route path="/launch-video" render = { props => <LaunchVideo {...props}/>}/>
            <Route path="/launch-menu" render = { props => <LaunchMenu {...props }/>}/>
            <Route path="/launch-product" render = { props => <LaunchProduct {...props}/>}/>
            
            <Route path="/home-phone" render = { props => <HomePhone {...props}/>}/>
            <Route path="/profile-phone" render = { props => <ProfilePhoneScreen {...props}/>}/>
            <Route path="/product-phone" render = { props => <ProductPhoneScreen {...props}/>}/>
            <Route path="/category-phone" render = { props => <MenuCategoryPhoneScreen {...props}/>}/>
            <Route path="/detailed-category-phone" render = { props => <DetailedCategoryPhoneScreen {...props}/>}/>
            <Route path="/detailed-food-phone" render = { props =><DetailedFoodPhoneScreen {...props}/>}/>
           </Switch>
        </Router>
        <ReduxToastr position="top-right" />
        <ModalConductor/>
      </main>
    )
  }
}

export default App;
