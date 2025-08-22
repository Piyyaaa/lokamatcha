import React, { useState } from 'react';
import logo from '../assets/loka.jpg';
import { Link } from 'react-scroll';
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className='fixed w-full z-10'>
      <div className='bg-gray-100 p-4 flex items-center justify-between'>
        <div className='flex items-center space-x-2 ml-4'>
          <img src={logo} alt="Loka Matcha Logo" className='h-10 w-auto rounded-full' />
          <h1 className='text-xl font-semibold'>Loka Matcha</h1>
        </div>
        <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8 relative -translate-x-4'>
          <Link to="home" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:text-brightColor'>Home
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>

          <Link to="about" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:text-brightColor'>About Us
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>

          <Link to="menu" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:text-brightColor'>Menu
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>


          <Link to="review" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:text-brightColor'>Reviews
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
        </nav>

        <div className='md:hidden flex items-center'>
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
          <Link to="home" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:text-brightColor'
            onClick={closeMenu}>Home
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>

          <Link to="about" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:text-brightColor'
            onClick={closeMenu}>About Us
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>

          <Link to="menu" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:text-brightColor'
            onClick={closeMenu}>Menu
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>

          <Link to="review" spy={true} smooth={true} duration={500} className='group relative inline-block cursor-pointer hover:text-brightColor'
            onClick={closeMenu}>Reviews
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar