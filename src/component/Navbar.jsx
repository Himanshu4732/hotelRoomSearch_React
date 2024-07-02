import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-20 text-white mt-10 absolute w-full cursor-pointer'>
        <div>
            <span className='text-2xl px-10 font-bold  cursor-pointer '>Roomway</span>
        </div>
        <div className='flex gap-10'>
            <span className=' cursor-pointer hover:scale-125 transition-all'>ROOMS</span>
            <span className=' cursor-pointer hover:scale-125 transition-all'>EVENTS</span>
            <span className=' cursor-pointer hover:scale-125 transition-all'>SIGN IN</span>
        </div>

    </div>
  )
}

export default Navbar