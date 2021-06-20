import React from 'react';

function MapFunction(){
    const friends_nicknames = ['vicky', 'yali', 'sammy', 'sanju']
    return <div>
        <h1>Map Function </h1>
        {
            friends_nicknames.map(friends=><h2>{friends}</h2>)
        }

    </div>
}

export default MapFunction;