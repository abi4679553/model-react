import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-5 justify-between border bg-blue-600 text-white'>
      <div>
        <p className=' px-10 p-5 text-2xl'> Abi</p>
      </div>
      <div className='flex gap-20 px-10 p-5  text-xl'>
        <p>Home</p>
        <p>About</p>
        <p> Contact</p>
        <p>Delivery</p>
      </div>

    </div>
  )
}

export default Header