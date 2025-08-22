import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0'>
        <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-xl pb-4'>Loka Matcha</h1>
                <p className='text-sm'>Welcome to our matcha cafe</p>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer' href='/'>Menu</a>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer' href='/'>About Us</a>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer' href='/'>Reviews</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer' href='/'>Premium Matcha</a>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer' href='/'>Latte</a>
                    <a className='hover:text-backgroundColor transition-all cursor-pointer' href='/'>Kopi</a>
                </nav>
            </div>
            <div>
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                <nav className='flex flex-col gap-2'>
                    <a href='mailto:lokamatcha@gmail.com' className='flex items-center gap-2 hover:text-backgroundColor text-xl transition-all'>
                    <FaEnvelope className='text-2xl'/><span className='text-base'>lokamatcha@gmail.com</span></a>
                    <a href='https://wa.me/6285156947265' target='blank' rel='noopener noreferrer' className='flex items-center gap-2 hover:text-backgroundColor text-xl transition-all'>
                    <FaWhatsapp/><span>WhatsApp</span></a>
                    <a href='https://instagram.com/lokamatcha' target='blank' rel='noopener noreferrer' className='flex items-center gap-2 hover:text-backgroundColor text-xl transition-all'>
                    <FaInstagram/><span>Instagram</span></a>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Footer