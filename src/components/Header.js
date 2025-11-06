import React from 'react'
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';


const Header = () => {
  return (
    <div className='flex gap-5 justify-between border bg-blue-600 text-white'>
      <div>
        <p className=' px-10 p-5 text-2xl'> Abi</p>
      </div>
      <div className='flex gap-20 px-10 p-5  text-xl'>

        <Link to="/home">Home</Link>
        <Navigate to ="/About">About</Navigate>
        <p> Contact</p>
        <p>Delivery</p>
      </div>

    </div>
  )
}

export default Header