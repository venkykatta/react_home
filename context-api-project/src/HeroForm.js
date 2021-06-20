import React,{ useContext, useState } from 'react';
import { HeroContext } from './HeroContext'

function HeroForm() {
    const [name, setName] = useState('')
    const [comic, setComic] = useState('')
    const { addHero } = useContext(HeroContext)

    const handleSubmit =(e)=> {
        e.preventDefault() 
        addHero(name, comic)
        setName('')
        setComic('')
    }
    return (
        <div className="d-flex justify-content-center p-3" style={{background:"teal"}}>
            <form className="col-md-4" onSubmit={ handleSubmit }>
                <div className="form-group">
                    <h5 style={{textAlign:'left'}}>SuperHero</h5>
                    <input className="form-control" value={name}type="text" placeholder="Enter SuperHero"  onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <h5 style={{textAlign:'left'}}>Comic</h5>
                    <input className="form-control" value={comic}type="text" placeholder="Enter Comic" onChange={(e)=> setComic(e.target.value)} required/>
                </div>
                <button className="btn btn-primary mt-3" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default HeroForm;