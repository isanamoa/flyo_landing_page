import React from 'react'

const FourthContent = () => {
  return (
      
    <div className="bg-white border border-gray-200 rounded-lg shadow
         dark:bg-gray-800 dark:border-gray-700 w-[90%] mx-auto md:w-[70%] md:mx-auto">
        <form className="flex flex-col gap-5 pt-3 px-5 pb-16 space-y-6">
            <div className='font-medium text-gray-900 text-center dark:text-white md:w-[70%] md:mx-auto'>
                <h5 className="text-2xl">Get early access today</h5>
                <p>
                    It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.
                </p>
            </div>
            <div className='flex flex-col gap-5 md:flex-row md:w-[75%] md:mx-auto'>
                <input type="email"  className=" border border-white rounded-3xl 
                text-gray-900 text-xl w-full px-3  dark:text-gray-900" placeholder="email@example.com" required />
                
                <button type="submit" className="rounded-3xl py-3 px-20 text-white bg-[#63E1D9] focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm  dark:bg-[#63E1D9] dark:hover:bg-[#63E1D9] dark:focus:ring-[#63E1D9]">Get Started For Free</button>

            </div>
                        
        </form>
    </div>

  )
}

export default FourthContent
