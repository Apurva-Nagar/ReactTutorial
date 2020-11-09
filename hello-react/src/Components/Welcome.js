import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <h2> Starring {this.props.name} as Wonder Woman </h2>
        );
    }
}

export default Welcome