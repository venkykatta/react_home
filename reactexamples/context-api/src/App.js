import './App.css';
import CompA from './CompA';
import GlobalContextProvider from './GlobalContext';

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <CompA />
      </div>
    </GlobalContextProvider>
    
  );
}

export default App;
