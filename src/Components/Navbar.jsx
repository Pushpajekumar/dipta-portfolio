import React from 'react'
import { Link } from 'react-scroll'
import { Link as List } from "react-router-dom";

const Navbar = () => {

    const toggleshow = () => {
        let btnshow = document.getElementById('btnshow')
        let btnhide = document.getElementById('btnhide')
        let navbar = document.getElementById('navbar')
        if (navbar.style.display = 'none') {
            btnshow.style.display = 'none'
            navbar.style.display = 'block'
            btnhide.style.display = 'block'
        }
    }

    const togglehide = () => {
        let btnshow = document.getElementById('btnshow')
        let btnhide = document.getElementById('btnhide')
        let navbar = document.getElementById('navbar')
        if ((navbar.style.display = 'none') && (btnshow.style.display = 'block')){
            btnhide.style.display = 'none'
        btnshow.style.display = 'block'}
    }

    return (
        <div className="bg-black text-white fixed flex w-full justify-between items-center px-4 md:px-12 h-16 -mt-10 ">
            <div>
                <img className='h-10' src="./images/Mylogo.jpg" alt="" />
            </div>
            <div>
                <nav>
                    <button id='btnshow' onClick={toggleshow} className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button id='btnhide' onClick={togglehide} className='hidden md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ul id='navbar' className='font-medium  hidden fixed mt-3 left-0 right-0 min-h-screen bg-gray-900 space-y-6 p-8 delay-300 rounded-2xl md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-8 md:p-0 md:translate-x-0 md:bg-black '>
                        <li className='text-center py-2 hover:cursor-pointer hover:bg-green-500 hover:text-black rounded-2xl md:px-4'><List to="/" >Home</List></li>
                        <li className='text-center py-2 hover:cursor-pointer hover:bg-green-500 hover:text-black rounded-2xl md:px-4'><List to="/work" >Work</List></li>
                        <li className='text-center py-2 hover:cursor-pointer hover:bg-green-500 hover:text-black rounded-2xl md:px-4'><Link to="about" spy={true} smooth={true} offset={-60} duration={700}>About</Link></li>
                        <li className='text-center py-2 hover:cursor-pointer hover:bg-green-500 hover:text-black rounded-2xl md:px-4'><Link to="services" spy={true} smooth={true} offset={-60} duration={700}>Services</Link></li>
                        <li className='text-center py-2 hover:cursor-pointer hover:bg-green-500 hover:text-black rounded-2xl md:px-4'><Link to="achievements" spy={true} smooth={true} offset={-60} duration={700}>Achievements</Link></li>
                        <li className='text-center py-2 hover:cursor-pointer hover:bg-green-500 hover:text-black rounded-2xl md:px-4'><Link to="contact" spy={true} smooth={true} offset={50} duration={700}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar