import React, {Component} from 'react';

class RefsDemo extends Component {
    constructor() {
        super()
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleSubmit = () => {
        alert(this.inputRef.current.value)
    }

    render () {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <button type='submit' onClick={this.handleSubmit} >
                    Submit
                </button>
            </div>
        );
    }
}

export default RefsDemo
