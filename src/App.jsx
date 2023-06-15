import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import FirstContent from './components/FirstContent'
import SecondContent from './components/SecondContent'
import ThirdContent from './components/ThirdContent'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-slate-800'>
      <Header />
      <main className='mt-10'>
        <Banner />
        <FirstContent />
        <SecondContent />
        <ThirdContent />
      </main>
      <Footer />
    </div>
  )
}

export default App
