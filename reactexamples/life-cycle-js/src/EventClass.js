import React,{ Component } from 'react';

class EventClass extends React.Component {
    handleClass(){
        console.log("In class component")
    }
    render(){
        return <div>
            <h1>This is event handling in class component</h1>
            <button onClick={ this.handleClass }>Click me</button>
        </div>
    }
}

export default EventClass;