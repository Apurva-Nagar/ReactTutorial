import React, {Component} from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Apurva'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>Check console log for order of different mounting lifecycle functions</div>
                <div>LifecycleA - Parent</div>
                <LifecycleB />
            </div>
        );
    }
}

export default LifecycleA