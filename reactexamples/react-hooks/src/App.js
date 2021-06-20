import './App.css';

//useState, useEffect
import React,{ useState, useEffect } from 'react'

// function App() {
//   const [score, setScore] = useState('no')
//   const handleScore=()=> {
//     setScore('Hatrick')
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Ronald has scored { score } goals</h1>
//         <button onClick={handleScore}>Click me</button>
//       </header>
//     </div>
//   );
// }

// useEffect
function App() {

  const [type, setType] = useState('')

  console.log('Window Rendered!')
  useEffect(() => {
    console.log("component is rendered!")
  }, [type])

  return (
    <div className="App">
      <header className="App-header" >
        <button onClick={() => setType('12 posts')}>Posts</button>
        <button onClick={() => setType('250 likes')}>Likes</button>
        <button onClick={() => setType('37 comments')}>Comments</button>
        <h1>{ type }</h1>
      </header>
    </div>
  );
}

export default App;
