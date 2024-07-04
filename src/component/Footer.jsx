import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";


function Footer() {
  return (
    
        <footer className="footer">
            <div className="container w-full flex justify-center p-20 items-center gap-36">
                <span className=" text-xl font-bold">Roomway</span>
                <div className='flex gap-8'>
                    <a href="/about">About</a>
                    <a href="/event">Events</a>
                    <a href="/arrival">Arrives</a>
                    <a href="/faq">FAQs</a>
                    <a href="/room">Rooms</a>
                </div>
                <div className='flex gap-8'>
                    <FaFacebook/>
                    <FaGoogle/>
                    <FaInstagram/>
                    <FaTwitter/>
                </div>
            </div>
        </footer>
  )
}

export default Footer