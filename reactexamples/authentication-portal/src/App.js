import './App.css';
import React,{ useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import login from './login.png';


function App() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleValidate=(e)=>{
    e.preventDefault()
    if(user == 'venkyjs@gmail.com' && pass == 12345)
    alert('Success login')
    else
    alert('Wrong credentials!')
  }

  return (
      <div className="App-header">
        <h1 className="head">Authentication Portal</h1>
        <div className="row">
        <div className="col-md-6">
          <img className="img" src={login} width="300"/>
        </div>
        <div className="col-md-5">
        <form onSubmit={ handleValidate }>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" value={user} className="form-control" placeholder="Email"onChange={(e)=>setUser(e.target.value)}/>
            <div className="form-text"></div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" value={pass} className="form-control" placeholder="Password"onChange={(e)=>setPass(e.target.value)}/>
          </div>    
          <br />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
      </div>
  );
}

export default App;
