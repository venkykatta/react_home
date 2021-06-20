import logo from './logo.svg';
import './App.css';

function App() {

  const styling = {
    fontSize:'4em',
    color:"crimson"
  }
  
  const app = {
    backgroundColor:'#FFBF00',
    padding:'15px'
  }

  const name ={
    fontSize:'1em',
    color:'#35393D'
  }

  const apps = {
    backgroundColor:'#D6900D',
    padding:'30px'
  }

  return (
    <div className="App">
      <div  style={app}>
        <h1 style={ styling }>
          Hi there!
        </h1>
      </div>
      <div style={ apps }>
        <div style={name}>
          <h1>I'm Venkatesh!</h1>
        </div>
      </div>
    </div>

  );
}

export default App;
