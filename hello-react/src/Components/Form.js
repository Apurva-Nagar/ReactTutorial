import React, { Component  } from 'react';

class Form extends Component {

    constructor () {
        super()
        this.state = {
            username: '',
            topic: 'React'
        }
    }

    handleUsernameChange = (event) => {
        this.setState ({
            username: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState ({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Hello, ${this.state.username}. You selected ${this.state.topic}.`)
        event.preventDefault()
    }

    render () {
        const {username, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label> &nbsp;
                    <input 
                        type='text' 
                        value={username} 
                        onChange={this.handleUsernameChange} 
                    />
                </div>
                <div>
                    <label>Topic</label> &nbsp;
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default Form