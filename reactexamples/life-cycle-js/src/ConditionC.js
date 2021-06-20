import React,{ Component } from 'react';

class ConditionC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogged: true
        }
    }
    render() {
        // if(this.state.isLogged)
        //     return <div>Welcome James!</div>
        // else
        //     return <div>Welcome David!</div>
        // let message;
        // if(this.state.isLogged)
        //     message= <div>Welcome Daniel!</div>
        // else
        //     message= <div>Welcome Guest!</div>

        // return <div>
        //     {message}
        // </div>
        return (this.state.isLogged)?
        <div>Welcome Prathap!</div>:
        <div>Welcome Avinash</div>
    }
}

export default ConditionC;