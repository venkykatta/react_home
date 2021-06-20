import React, {Component} from 'react';

class FormHandle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           friend : '',
        }

    }

    handleInput=(event)=> {
        this.setState({
            friend:event.target.value
        })
    }

    handleSelect=(event)=>{
        this.setState({
            bestFriend:event.target.value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        alert(`My name is ${this.state.friend} and ${this.state.bestFriend} is my best friend!`)
    }

    render() {
        return <div>
            <h1>Form handle exercise! in React Js</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Name : </label>
                <input type="text" 
                value={this.state.friend} 
                onChange={this.handleInput}/>
                <br />
                <br />
                <label>Friend : </label>
                <select value={this.state.bestFriend} onChange={this.handleSelect}>
                    <option>Vinay</option>
                    <option>Rohith</option>
                    <option>Sammy</option>
                    <option>Prabha</option>
                    <option>Raju</option>
                </select>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </div>
    }
}

export default FormHandle;