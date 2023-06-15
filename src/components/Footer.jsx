import React from 'react'
import Flyo from '../assets/logo.svg'
import FlyoLoco from '../assets/icon-location.svg'
import FlyoPhone from '../assets/icon-phone.svg'
import FlyoEmail from '../assets/icon-email.svg'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='p-5 pt-56'>
      <div className='py-6'>
        <img src={Flyo} alt="Logo" className="w-28 h-16" />
      </div>
      <div className='flex flex-col md:flex-row text-white'>
        <section className='flex gap-5 md:w-2/6 py-3 px-3'>
            <img src={FlyoLoco} alt="Location" className="w-8 h-8" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </section>
        <section className='md:w-1/6 py-3'>
            <section className='flex gap-5 py-3'>
                <img src={FlyoPhone} alt="Location" className="w-8 h-8" />
                <p>
                    +1-543-123-4567
                </p>
            </section>
            <section className='flex gap-5 py-3'>
                <img src={FlyoEmail} alt="Location" className="w-8 h-8" />
                <p>
                    example@fylo.com
                </p>
            </section>
        </section>
        <section className='text-xl md:w-1/6 py-3'>
            <p>
                <a href="/">
                    About Us
                </a>
            </p>
            <p>
               <a href="/">
                Jobs
               </a> 
            </p>
            <p>
                <a href="">
                    Press
                </a>
            </p>
            <p>
                <a href="">
                    Blog
                </a>  
            </p>
        </section>
        <section className='text-xl md:w-1/6 pt-3 pb-5'>
            <p>
                <a href="/">
                    Contact Us
                </a>
            </p>
            <p>
                <a href="/">
                    Terms
                </a>
            </p>
            <p>
                <a href="/">
                    Privacy
                </a>
            </p>
        </section>
        <section className='flex justify-center items-start gap-5 flex-1'>
            <a href="/ " className="rounded-full border-2 border-white">
                <BsFacebook  className='w-16 h-16 p-3' />
            </a>
            <a href="/" className="rounded-full border-2 border-white">
                <BsTwitter className="w-16 h-16 p-3" />
            </a>
            <a href="/" className="rounded-full border-2 border-white">
                <BsInstagram className="w-16 h-16 p-3" />
            </a>
        </section>
      </div>
    </footer>
  )
}

export default Footer
