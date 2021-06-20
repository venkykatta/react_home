import React from 'react';


function BigMap(){

    const persons = [
        {
            id:1,
            name:'Shikhar',
            age:23
        },
        {
            id:2,
            name:'Dhoni',
            age:24
        },
        {   
            id:3,
            name:'Kohli',
            age:25
        },
        {
            id:4,
            name:'Joe Root',
            age:28
        },
        {
            id:5,
            name:'Samson',
            age:27
        },
        {
            id:6,
            name:'Kane Williamson',
            age:21
        }
    ]
    return <div>
        <h1>Big Map function demo!</h1>
        {
            persons.map(person=>(
            <div key={person.id}>
            <h2>{person.name}</h2>
            <h3>{person.age}</h3>
            </div>
            ))
        }
    </div>
}

export default BigMap;  

// console.log(React.version)
