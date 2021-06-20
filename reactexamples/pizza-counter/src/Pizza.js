import React,{Component} from 'react';
import pizza from './pizza.png'

const counter = {
    fontSize: "50px",
    backgroundColor: "#6D7279",
    borderRadius:"10px"
}

const button = {
    fontSize:"20px",
    padding:"10px",
    backgroundColor:"white",
    borderRadius:"10px"
}

const img = {
    marginTop: "15px",
    width:"200px"
}

const title = {
    fontFamily: "sofia",
    fontSize: 50,
}

class Pizza extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    takeOrder() {
        this.setState({
            count: this.state.count +1
        })
    }

    cancelOrder() {
        this.setState({
            count: this.state.count -1
        })
    }

    render () {
        return <div>
            <img src={ pizza } style={ img }/>
            <h1 style={ title }>Pizza order counter</h1>
            <h2 style={ counter }>{ this.state.count }</h2>
            <button style={ button } onClick={ () => this.takeOrder() }>Take Order</button><br /><br />
            <button style={ button } onClick={ () => this.cancelOrder() }>Cancel Order</button>
        </div>
    }
}
export default Pizza;