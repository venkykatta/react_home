import logo from './logo.svg';
import React from 'react'
import './App.css';

//3. variable referencing
var text = "welcome to react framework";
var options = {
  one: 'first text',
  two: 'second text',
}

function App() {
  return (
    // 2. class and className Difference
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World, welcome to react js!</h1>
        {/* 1.styling difference */}
        <h1 style={{backgroundColor:"red", fontSize: "12px"}}>1.Styling Experiment </h1>
        <button>{text}</button>
        <h1>{options.two}</h1>
      </header>
    </div>
  );
// It shows the diff. between the JSX and JS.
  // return React.createElement(
  //   'div',
  //   null,
  //   React.createElement(
  //     'h1',
  //     {id: 'firstid', className: 'firstclass'},
  //     'without JSX'))

}

export default App;
