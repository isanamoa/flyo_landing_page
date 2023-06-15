import React from 'react'
import Flyo from '../assets/logo.svg'
const Header = () => {
  return (
    <header className='flex justify-between items-center text-white text-xl py-5'>
        <div>
          <a href="/" className="flex items-center py-4 px-2">
            <img src={Flyo} alt="Logo" className="w-28" />
          </a>
        </div>
        <div className='flex items-center mr-5'>
          <a
            href="/"
            className="py-2 px-2 font-medium rounded hover:text-white transition duration-300"
            >
            Features
          </a>
          <a
            href="/"
            className="py-2 px-2 font-medium rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
            Team
          </a>
          <a
            href="/"
            className="py-2 px-2 font-medium rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
            Sign in
          </a>
        </div>
    </header>
  )
}

export default Header
