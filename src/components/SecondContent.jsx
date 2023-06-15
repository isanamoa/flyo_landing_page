import React from 'react'
import IllustrationProductive from '../assets/illustration-stay-productive.png'
import Arrow from '../assets/icon-arrow.svg'

const SecondContent = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-center px-5 py-9 gap-5 md:grid-cols-2 md:w-[70%] md:mx-auto'>
        <img src={IllustrationProductive} alt="Illustration Intro" />
        <div className=''>
            <p className='text-white text-3xl text-center mb-3 md:text-left'>
                Stay productive, <br /> wherever you are
            </p>
            <p className='text-gray-400 mb-3 text-sm'>
                Never let location be an issue when accessing your files. 
                Fylo has you covered for all of your file storage needs.
            </p>
            <p className='text-gray-400 mb-3 text-sm'>
                Securely share files and folders with friends, 
                family and colleagues for live collaboration. No email attachments required.
            </p>
            <button className='flex text-[#62E0D9] border-b-2 border-b-[#62E0D9] items-center'>See how Fylo works <img src={Arrow} alt="Arrow" className='ml-2' /></button>
        </div>
    </div>
  )
}

export default SecondContent
