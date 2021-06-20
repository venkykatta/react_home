import React from 'react';

function EventFunction() {
    function handleClick(){
        console.log("It's Working now!");
    }
    return <div>
        <h1>This is event handling in functional component!</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
}

export default EventFunction;
