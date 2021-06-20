import React,{Component} from 'react';

class StateClass extends React.Component {

    constructor(props){
        super(props)
        this.state={
            message:"Welcome to React js"
        }
    }

    handleButton(){
        this.setState({
            message:"Happy code!"
        })
    }
    render() {
        return <div>
            <h2>{this.state.message}</h2>
            <br /> 
            <button onClick={ () => this.handleButton()}>Click me</button>
        </div>
    }
}

export default StateClass;