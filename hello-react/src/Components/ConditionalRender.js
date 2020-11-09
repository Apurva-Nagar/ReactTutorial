import React, { Component } from 'react';

class ConditionalRender extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn : true
        }
    }

    // Short Circuit Operator
    // render () {
    //     return this.state.isLoggedIn && <div>Hello Apurva</div>
    // }

    // Ternary
    render() {
        return this.state.isLoggedIn ? (<div>Hello Apurva</div>) : (<div>Hello Guest</div>) 
    }

    // if-else
    // render() {
    //     let message
    //     if (this.state.isLoggedIn) {
    //         message = <div>Welcome Apurva</div>
    //     } else {
    //         message = <div>Welcome Guest</div>
    //     }

    //     return (
    //         message
    //     );
    // }
}

export default ConditionalRender