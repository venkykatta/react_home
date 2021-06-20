import React,{Component} from 'react'

class PropsClass extends React.Component{
    render() {
        // console.log(this.props)
        return <div>
            <h2>1.My name is {this.props.name}</h2>
            <h2>2.Contact number is: {this.props.number}</h2>
            <h2>3.I live in {this.props.country}</h2>
        </div>
    }
}

export default PropsClass;