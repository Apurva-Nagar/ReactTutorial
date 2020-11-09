import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class PortalDemo extends Component {
    render() {
        return ReactDOM.createPortal(
            <h2>Portal Demo</h2>,
            document.getElementById('portal-root')
        );
    }
}

export default PortalDemo