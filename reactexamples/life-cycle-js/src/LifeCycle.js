import React,{ Component } from 'react';

class LifeCycle extends React.Component {
    componentWillMount() {
        alert('Before component render!')
    }

    componentDidMount() {
        alert('After the did mount!')
    }
    render() {
        return <div>
            <h1>LifeCycle in React Js</h1>
        </div>
    }
}
export default LifeCycle;