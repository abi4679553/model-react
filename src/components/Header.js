import React from 'react'
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom'



const Header = () => {
  const Navigate = useNavigate()
  return (
    <div className='flex gap-5 justify-between border bg-blue-600 text-white'>
      <div>
        <p className=' px-10 p-5 text-2xl'> Abi</p>
      </div>
      <div className='flex gap-20 px-10 p-5  text-xl'>

        <Link to="/home">Home</Link>
        <Link to ="/About">About</Link>
        <p onClick={() => Navigate('/Contact')}>Contact</p>
        <a href='/' onClick={() => Navigate ('/Delivery')}>Delivery</a>

        
        
        
      </div>

    </div>
  )
}

export default Header