import React, 
{useState} from 'react';
import axios from 'axios';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [crypto, setCrypto] = useState('')
  const [img, setImage] = useState('')
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [link, setLink] = useState('')
  const [ind, setInd] = useState('')
  const [usd, setUsd] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit= () =>{
    const url="https://api.coingecko.com/api/v3/coins/" + crypto;
    axios.get(url).then(res=>{
      const resData = res.data
      setImage(resData.image.large)
      setName(resData.name)
      setSymbol(resData.symbol)
      setLink(resData.links.homepage[0])
      setInd("Indian Price: ₹" + resData.market_data.current_price.inr)
      setUsd("United States: $" + resData.market_data.current_price.usd)
      setDescription(JSON.stringify(resData.description.en))
    })
  }
  
  function createMarkup(){
    return { __html: description }
  }

  return (
    <div style={{ backgroundColor:"crimson", minHeight: "100vh"}} className="App">
      <h1 className="bg-info p-4">Cryptocurrency Search</h1>
      <div className="d-flex justify-content-center">
        <div className="col-md-4 mt-5">
          <input className="form-control" type="text" value={crypto} onChange={(e)=>setCrypto(e.target.value)} placeholder="Enter the cryptocurrency" required/>
        </div>
      </div>
      <button onClick={ handleSubmit }className="btn btn-secondary px-5 mt-4">Submit</button>
      <div className="mt-5 container-fluid d-flex justify-content-center">
        <div className="col-md-4 bg-success p-2 rounded">
          <img src={ img } width="150"/>
          <br />
          <h1 className="text-white">{ name }</h1>
          <h2>{ symbol }</h2>
          <h2><a className="text-white" href={ link }>{ link }</a></h2>
          <br />
          <h2>{ ind }</h2>
          <h2>{ usd }</h2>
        </div>
        <div className="text-white col-md-8 my-auto">
          <div dangerouslySetInnerHTML={ createMarkup() }></div>
        </div>
      </div>
    </div>
  );
}

export default App;
