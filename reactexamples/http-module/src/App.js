import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [user,setUser] = useState([])
//   async function handleFetch() {
//     var response = await fetch('https://jsonplaceholder.typicode.com/users') 
//     console.log(await response.json())
//   }

  const handleAxios = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res)
      setUser(res.data)
    })
    .catch(err => console.log(err))
  }

  const loopData = user.map(data=>{
    return <div>
      <h2>Username: {data.name}</h2>
      <h2>Email: {data.email}</h2>
      <h2>Website: {data.website}</h2>
      <hr />
    </div>
  })

  return (
    <div className="App">
      <h1>HTTP modules</h1>
      {/* <button onClick={ handleFetch }>Get Data using fetch</button> */}
      <button onClick={ handleAxios }>Get Data using Axios</button>
      { loopData }
    </div>
  );
}

export default App;
