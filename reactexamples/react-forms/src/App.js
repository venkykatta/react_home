import './App.css';
import React, {useState} from 'react';

// function App() {
//   const [name, setName] = useState('')
//   const [country, setCountry] = useState('')

//   const handleSubmit=()=>{
//     alert(`I'm ${name} from  ${country}!`)
//   }

   
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>Enter your name:</h3>
//         <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
//         <h3>Enter your country:</h3>
//         <input type="text" value={country} onChange={(e)=> setCountry(e.target.value)}/>
//         <br />
//         <button onClick={handleSubmit}>submit</button>
//       </header>
//     </div>
//   );
// }

function App(){
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [player, setPlayer] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    var user = {
      name: name,
      age: age,
      player: player
    }

    console.log(user)

  }

  return(
    <div className="App">
      <h1>React hooks form submission!</h1>
      <form onSubmit={ handleSubmit }>
      <label>Enter your name:</label>
      <br />
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      <br />
      <br />
      <label>Enter your age:</label>
      <br />
      <input type="text" value={age} onChange={(e)=> setAge(e.target.value)}/>
      <br />
      <br />
      <label>Enter your favorite player:</label>
      <br />
      <input type="text" value={player} onChange={(e)=> setPlayer(e.target.value)}/>
      <br />
      <br />
      <button type="submit">submit</button>
      </form>
      </div>
  )
}

export default App;
