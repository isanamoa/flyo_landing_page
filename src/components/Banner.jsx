import React from 'react'
import IllustrationIntro from '../assets/illustration-intro.png'
const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center px-5 gap-5 py-8 md:w-[40%] md:mx-auto'>
        <img src={IllustrationIntro} alt="Illustration Intro" />
        <p className='text-white text-3xl text-center mb-3'>
            All your files in one secure location, accessible anywhere.
        </p>
        <p className='text-gray-400 text-lg'>
            Fylo stores all your most important files in one secure location. 
            Access them wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        <button  className='rounded-3xl py-3 px-20 text-white bg-[#63E1D9]'>Get Started</button>
    </div>
  )
}

export default Banner
