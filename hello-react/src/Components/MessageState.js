import React, { Component } from 'react';

class MessageState extends Component {

    constructor() {
        super();
        this.state = {
            message : 'Click to Subscribe'
        }
    }

    changeMessage() {
        this.setState({
            message : 'You are now Subscribed!'
        }) 
    }

    render () {
        return (
            <div>
                <h3> {this.state.message} </h3>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default MessageState