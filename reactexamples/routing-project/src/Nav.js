import React from 'react';
import {Link} from 'react-router-dom';


var link = {
    color:"white",
    textDecoration:"none",
    backgroundColor:"blue",
    padding:"7px"
}
   
function Nav() {
    return <div>
        <Nav style={{ backgroundColor: "crimson", padding:"30px" }}>
            <Link style={link} to="/">Home</Link>
            <Link style={link} to="/About">About</Link>
            <Link style={link} to="/Contact">Contact</Link>
        </Nav>
    </div>
}

export default Nav;