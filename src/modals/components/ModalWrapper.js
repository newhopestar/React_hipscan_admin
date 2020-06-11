import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

//import actions
import { hideModal } from '../ModalConductorActions';

class ModalWrapper extends React.Component{
    constructor(props) {
        super(props);
        this.hideModal = this.hideModal.bind(this);
        this.onOk =  this.onOk.bind(this);
    }

    hideModal() {
        this.props.modalActions.hideModal();
    }
    onOk() {
        this.props.onOk();
        this.hideModal();
    }

    render() {
        return (
            <Modal 
                show={ true }
                onHide = { this.hideModal }
                dialogClassName="modal-container"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {this.props.title}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body> { this.props.children } </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.onOk}> {this.props.okText} </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

ModalWrapper.defaultProps = {
    okText: 'Yes',
    title:'Modal Title',
    onOk: ()=>{},
}

ModalWrapper.propTypes = {
    onText:PropTypes.string,
    title: PropTypes.string,
    onOk:PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
        PropTypes.element
    ])
};

export default connect(
    null,
    dispatch => ({ 
        modalActions:bindActionCreators({ hideModal }, dispatch)
    })
) (ModalWrapper)