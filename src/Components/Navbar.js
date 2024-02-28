import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const inputref = useRef();
 

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${input}`)
    inputref.current.focus();
  }
  return (
    <div className='nav'>

      <div className='left'>
        <Link to='/' className='link'>
          <h2>React Recipe App</h2>
        </Link>
      </div>

      <div className='search'>
        <form onSubmit={handleSubmit}>
          <input type='text' value={input} ref={inputref} onChange={(e) => setInput(e.target.value)} />
        </form>

      </div>
      <div className='right'>
        <Link to={`/category/Indian`} className='link'><div>Indian</div> </Link>
        <Link to={`/category/American`} className='link'> <div>American</div></Link>
        <Link to={`/category/British`} className='link'><div>British</div></Link>
        <Link to={`/category/Chinese`} className='link'><div>Chinese</div></Link>
        <Link to={`/category/Thai`} className='link'><div>Thai</div></Link>

      </div>

    </div>
  )
}

export default Navbar
