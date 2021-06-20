import logo from './logo.svg';
import './App.css';
import Inline from './Inline'
import InFile from './InFile'
import External from './External'
import StyledC from './StyledC'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Inline />
        <InFile />
        <External /> */}
        <StyledC />
      </header>
    </div>
  );
}

export default App;
