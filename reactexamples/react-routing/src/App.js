import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav />
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
