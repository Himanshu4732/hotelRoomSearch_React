import React from 'react'
import mumbai from '../images/mubai.jpg'

import { FaHotel } from "react-icons/fa6"
import '../App.css'



function About() {
  return (
    <>
    <div className='w-full h-[100vh] bg-slate-950 flex justify-around items-center py-10'>
        <div className='w-1/2 h-4/5 flex justify-center items-center'>
          <img src={mumbai} alt="" className='h-5/6 w-1/2 opacity-60  rounded-2xl shadows'/>
        </div>
        <div className=' w-1/2 h-4/5 flex flex-col justify-center items-center gap-10 text-white px-20'>
          <div className='w-full'><FaHotel size="2em" /></div>
          <span>
          Welcome to RoomFinder! Discover your perfect room with our extensive, verified listings tailored to fit your lifestyle and budget. Our user-friendly interface, advanced search filters, and detailed descriptions make finding your ideal space easy and stress-free.
          </span>
          <span>
          Read community reviews, view high-quality photos, and contact landlords securely through our platform. Whether you need a cozy downtown room, affordable student housing, or a luxurious suite, we have options for everyone. Sign up today and join thousands of satisfied users who have found their ideal rooms with RoomFinder. Start your search now and move into your new home with confidence!
          </span>
        </div>
    </div>
    
    </>
  )
}

export default About