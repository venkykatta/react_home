import React, { useContext } from 'react';
import { HeroContext } from './HeroContext'

function Nav() {
    const {heros} = useContext(HeroContext)
    const design = {
        background:'black',
        height:'60px',
        color:'white',
        display:'flex',
        justifyContent:'space-around'
      }
    return (
        <div style={design}>
            <h2>Super Heros</h2>
            <h2>List of heros:{heros.length}</h2>
        </div>
    )
}

export default Nav;