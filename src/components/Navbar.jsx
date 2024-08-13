import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
   const navigate = useNavigate()
   const [input, setInput] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();   
      navigate(`/search/${input}`);
   }


   return (
    <div className="nav">

   <div className="left"> 
       <Link to='/'  className='link'>
        <h2>React Recipe App</h2>
        </Link>
    </div>


    <div className="search">
      <form onSubmit={handleSubmit}>
      <input
      onChange={(e)=> setInput(e.target.value)}
      type="text" />
      </form>
       
    </div>

    <div className="right">
      <Link className='link' to={`/category/indian`}>
        <div>Indian</div>
     </Link>
     <Link className='link' to={`/category/american`}>
        <div>American</div>
     </Link>
     <Link className='link' to={`/category/british`}>
        <div>British</div>
     </Link>
     <Link className='link' to={`/category/chinese`}>
        <div>Chinese</div>
     </Link>
     
    </div>
</div>

  )
}

export default Navbar
