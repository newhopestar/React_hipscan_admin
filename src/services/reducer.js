import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import Service reducers
import authReducer from './auth/authReducer';
import profileReducer from './profile/profileReducer';

//import modal reducer
import modalReducer from '../modals/ModalConductorReducer';

const serviceReducer = combineReducers({
    auth:authReducer,
    profile:profileReducer
})

export default combineReducers({
    routing: routerReducer,
    services: serviceReducer,
    modal: modalReducer
})