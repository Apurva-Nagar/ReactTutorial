import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 1
        }
    }

    doIncrement() {
        this.setState(
            {
                counter : this.state.counter + 1
            },
            () => console.log('Callback value: ' + this.state.counter)
        )
    }

    doIncrementPreviousState() {
        this.setState(
            (prevState) => ({ 
                counter : prevState.counter + 1 
            }),
            () => console.log('Callback value: ' + this.state.counter)
        )
    }

    incrementFive() {
        this.doIncrementPreviousState()
        this.doIncrementPreviousState()
        this.doIncrementPreviousState()
        this.doIncrementPreviousState()
        this.doIncrementPreviousState()
    }

    render() {
        return (
            <div>
                <div> Counter - {this.state.counter} </div>
                <button onClick={ () => this.incrementFive() }> Increment </button>
            </div>
        )
    }
}

export default Counter