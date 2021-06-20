import React from 'react';
import logo from '../logo.svg';


function SuperComponent(props) {
    const {name, rating} = props;
    return <div>
        <div style={{ margin:"10px", backgroundColor:'orange', padding:'20px', borderRadius:"20px" }}>
            <img src={logo} width="120" />
            <h1>{name}!</h1>
            <h1>{rating}</h1>
        </div>
    </div>
}

export default SuperComponent;