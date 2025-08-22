import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import img1 from '../assets/foto1.jpg'

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-gradient-to-r from-[#FFF] to-[#3BB143]'>
        <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>Customer's Review</h1>
        <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
            <ReviewCard img={img1} title='Coriena L.' text='Untuk harga segini enak loh! Bakalan jadi langganan kalau lg WFH'/>
            <ReviewCard img={img1} title='Angel C.' text='Buat yang ga suka manis, pesen less sugar menurutku udah pas banget! Jadi kerasa pahit pahit mathanya. Rasa matcha sama susu nya berasa premium & bisa request es batu dipisah juga. Jarang-jarang ada minuman matcha tapi mix pistahio! Enak banget hihi terima kasih banyak ♥️♥️♥️'/>
            <ReviewCard img={img1} title='Jordy'/>
        </div>
    </div>
  )
}

export default Review