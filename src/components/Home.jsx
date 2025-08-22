import React from 'react';
import Button from '../layouts/Button';
import img from '../assets/bg3.jpg';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFF] to-[#3BB143]'>
        <div className='w-full space-y-4 mt-14 lg:mt-0'>
            <h1 className='font-semibold text-5xl text-center lg:text-start leading-tight'>Secangkir Matcha, sejuta manfaat</h1>
            <p>Hari-hari bisa terasa padat dan cepat, tapi kamu tetap bisa memilih untuk menikmati momen dengan lebih tenang. Loka Matcha adalah teman kamu untuk nge-boost energi tanpa bikin deg-degan.</p>
            <p>Rasanya enak, manfaatnya nyata, dan cocok banget buat kamu yang pengen hidup lebih sehat, lebih mindful, dan tetap produktif. Yuk, #HijauinHarimu bareng Loka Matcha!</p>
        </div>

        <div className='relative'>
            <img src={img} alt='img' className='w-[1700px] h-auto rounded-3xl'/>
        </div>
    </div>
  )
}

export default Home