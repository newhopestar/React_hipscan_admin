import React from 'react';
import { connect } from 'react-redux';

//import modal
import HipscanAdd from './components/HipscanAdd';
import { Modal } from 'react-bootstrap';

const ModalConductor = props => {
    console.log(props.modal)
    switch (props.modal.modalType){
        case 'ADD_HIPSCAN':
            return <HipscanAdd {...props}/>;
        default:
            return null;
    }
};
 
export default connect(
    state => ({
        modal:{
            ...state.default.modal
        }
    }),
    null
)(ModalConductor);
