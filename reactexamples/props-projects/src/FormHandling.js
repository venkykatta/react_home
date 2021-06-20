import React, {Component} from 'react'

class FormHandling extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            lang: ''
        }
    }

    handleInput=(event) => {
        this.setState({
            user:event.target.value
        })
    } 

    handleSelect=(event) => {
        this.setState({
            lang:event.target.value 
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        alert(`Username is ${this.state.user} \nFavorite language is ${this.state.lang} `)
    }
    render(){
        return <div>
            <h1>Form Handling in React Js</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Username </label>
                <input 
                type="text" 
                value={this.state.user} 
                onChange={this.handleInput}/>
                <br />
                <br />
                <label>Favorite Language </label>
                <select value={this.state.lang} onChange={this.handleSelect}>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                <br />
                <br />
                <button>submit</button>
            </form>
        </div>
    }
}

export default FormHandling;