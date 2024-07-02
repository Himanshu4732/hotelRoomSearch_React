import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import Mainfooter from './Mainfooter'

function Mainpage() {
  return (
    <div className=' h-[120vh] w-full main relative overflow-hidden z-10 '>
        <Navbar />
        <div className='w-full h-full bg-gradient-to-b from-transparent via-transparent to-slate-950 absolute top-0 left-0 z-[-1]'></div>
        <div className='w-full h-full flex flex-col justify-center items-center text-white '>
            <div className='flex flex-col justify-center items-center'>
            <span className='text-3xl font-semibold'>Your Adventure Begins Here!</span>
            <span className='text-xl font-normal'>Get rooms everywhere</span>
            </div>
            <div>
            <Mainfooter/>

            </div>

        </div>

        

    </div>
  )
}

export default Mainpage