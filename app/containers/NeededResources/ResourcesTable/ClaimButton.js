import React, { Component } from 'react';

import {Modal, Col, Button} from 'react-bootstrap';
import {styles} from '../../../assets/styles/variables';

class ClaimButton extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            details: ""
        };
    }

    close = () => {
        this.setState({
            showModal: false
        });
    }

    open = () => {
        this.setState({
            showModal: true
        });
    }

    componentDidMount() {
        this.setState({
            details: "Details about needed resource coming soon!"
        })
    }

    renderModal() {
        return(
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.details}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.open} className="btn btn-block btn-primary" style={styles.primaryLight} >
                {/* need span to wrap text, otherwise we get a nodeparent error */}
                    <span> Details/Claim </span>
                </button>
                {this.renderModal()}
            </div>

        )
    }

}

export default ClaimButton;
