import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form } from 'react-bootstrap';
import ModalWrapper from '../ModalWrapper';

//import actions
import { addHipscan } from '../../../services/profile/profileActions'; 

class HipscanAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label:'',
            type:'url',
            url:'hipscan.com'
        }

        this.onChange= this.onChange.bind(this);
    }
    
    onChange(e) {
        this.setState({ label: e.target.value})
    }
    render() {
        return (
            <ModalWrapper
                title="Add Hipscan"
                onText="Submit"
                onOk={ ()=> {
                    const data = this.state;
                    let params = { type:data.type, label:data.label, url:data.url };
                    this.props.addHipscanActions.addHipscan(params);
                }}
            >
                <Form>
                    <Form.Group controlId="label">
                        <Form.Label>Label Input</Form.Label>
                        <Form.Control type="text"  placeholder="enter label" onChange={this.onChange} />
                    </Form.Group>
                </Form>
            </ModalWrapper>
        )
    }
}

export default connect(
    null,
    dispatch => ({
        addHipscanActions: bindActionCreators({ addHipscan }, dispatch)
    })
)(addHipscan)