import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return <div>
        <nav>
            <Link style={{ padding:'15px' }} to="/">Home</Link> 
            <Link style={{ padding:'15px' }} to="/about">About</Link>
            <Link style={{ padding:'15px' }} to="/contact">Contact</Link>
        </nav>
    </div>
}

export default Nav;