import React from 'react'
import Anywhere from '../assets/icon-access-anywhere.svg'
import Safty from '../assets/icon-security.svg'
import Collaboration from '../assets/icon-collaboration.svg'
import StoreFiles from '../assets/icon-any-file.svg'

const FirstContent = () => {
  return (
    <div className='grid grid-cols-1 gap-5 text-center px-7 py-9 md:grid-cols-2 md:w-1/2 md:mx-auto'>
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={Anywhere} alt="access anywhere" />
            <p className='text-white text-xl'>
                Access your files, anywhere            
            </p>
            <p className='text-gray-400 text-sm'>
                The ability to use a smartphone, tablet, or computer to access 
                your account means your files follow you everywhere.
            </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={Safty} alt="Security" />
            <p className='text-white text-xl'>
                Security you can trust            
            </p>
            <p className='text-gray-400 text-sm'>
                2-factor authentication and user-controlled 
                encryption are just a couple of the security features we allow to help secure your files.
            </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={Collaboration} alt="Collaboration" />
            <p className='text-white text-xl '>
                Real-time collaboration            
            </p>
            <p className='text-gray-400 text-sm'>
                Securely share files and folders with friends, 
                family and colleagues for live collaboration. No email attachments required.
            </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <img src={StoreFiles} alt="Store file" />
            <p className='text-white text-xl '>
                Store any type of file            
            </p>
            <p className='text-gray-400 text-sm'>
                Whether you're sharing holidays photos or work documents, 
                Fylo has you covered allowing for all file types to be securely stored and shared.
            </p>
        </div>
    </div>
  )
}

export default FirstContent
