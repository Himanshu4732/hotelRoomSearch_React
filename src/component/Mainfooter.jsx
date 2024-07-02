import React from 'react'

function Mainfooter() {
  return (
    <div className=' absolute bottom-0 left-0 w-full text-white/70 flex flex-col items-center justify-center '>
        <span>Discover your ideal room with our extensive listings. Enjoy an easy search process and secure communication. </span>
        <span> Find affordable, quality spaces in prime locations. Sign up today to start your search.</span>
        <span>Happy room hunting!</span>
        <button className=' cursor-pointer bg-white/70 text-black rounded-2xl px-8 py-2 mt-5 font-bold hover:invert transition-all'>Find a Room</button>
        <span className='text-white/70 my-2'>Starts at &#8377;1200/night  </span>
    </div>
  )
}

export default Mainfooter