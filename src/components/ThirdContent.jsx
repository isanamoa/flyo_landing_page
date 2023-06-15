import React from 'react'
import BgQuotes from '../assets/bg-quotes.png'
import Profile1 from '../assets/profile-1.jpg'
import Profile2 from '../assets/profile-2.jpg'
import Profile3 from '../assets/profile-3.jpg'
import FourthContent from './FourthContent'

const ThirdContent = () => {
  return (
    <div className='h-[950px] md:h-[450px] bg-slate-700'>
        <div className='relative grid grid-cols-1 justify-center px-2 mt-5 h-[750px] md:h-[300px] md:w-[70%] md:mx-auto'>
            <img src={BgQuotes} alt="Illustration Intro" className='px-2'/>    
            <div className='grid grid-cols-1 absolute top-9 px-5 md:grid-cols-3 gap-5'>
                <div className='bg-slate-600 rounded-lg p-5 mb-3'>
                    <div>
                        <p className='text-gray-400 text-sm'>
                            Fylo has improved our team productivity by an order of magnitude. 
                            Since making the switch our team has become a well-oiled collaboration machine.
                        </p>
                    </div>
                    <div className='flex gap-3 p-3'>
                        <img src={Profile1} alt="Profile 1" className='w-[15%] rounded-full' />
                        <div>
                            <p className='text-white text-2xl'>
                                Satish Patel
                            </p>
                            <p className='text-gray-400'>
                                Founder & CEO, Huddle
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-600 rounded-lg p-5 mb-3'>
                    <div>
                        <p className='text-gray-400 text-sm'>
                            Fylo has improved our team productivity by an order of magnitude. 
                            Since making the switch our team has become a well-oiled collaboration machine.
                        </p>
                    </div>
                    <div className='flex gap-3 p-3'>
                        <img src={Profile2} alt="Profile 1" className='w-[15%] rounded-full' />
                        <div>
                            <p className='text-white text-2xl'>
                                Bruce McKenzie
                            </p>
                            <p className='text-gray-400'>
                                Founder & CEO, Huddle
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-slate-600 rounded-lg p-5 mb-3'>
                    <div>
                        <p className='text-gray-400 text-sm'>
                            Fylo has improved our team productivity by an order of magnitude. 
                            Since making the switch our team has become a well-oiled collaboration machine.
                        </p>
                    </div>
                    <div className='flex gap-3 p-3'>
                        <img src={Profile3} alt="Profile 1" className='w-[15%] rounded-full' />
                        <div>
                            <p className='text-white text-2xl'>
                                Iva Boyd
                            </p>
                            <p className='text-gray-400'>
                                Founder & CEO, Huddle
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FourthContent />

    </div>

  )
}

export default ThirdContent
