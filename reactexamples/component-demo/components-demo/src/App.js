import logo from './logo.svg';
import './App.css';
import Classcomponent from './Components/Classcomponent'
import Functionalc from './Components/Functionalc'
import SuperComponent from './Components/SuperComponent'
import StateClass from './Components/StateClass'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateClass />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div style={{ display:"inline-flex"}}>
          <SuperComponent name="Ironman" rating="10/10"/>
          <SuperComponent name="Spiderman" rating="8/10" />
          <SuperComponent name="Batman" rating="7/10"/>
          <SuperComponent name="superman" rating="9/10"/>
        </div> */}
        {/* <Classcomponent></Classcomponent> */}
        {/* <Functionalc></Functionalc> */}
      </header>
    </div>
  );
}

export default App;
