import React, {Component} from 'react';

class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Apurva'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <div>Check console log for order of different mounting lifecycle functions</div>
                <div>LifecycleB - Parent</div>
            </div>

        );
    }
}

export default LifecycleB