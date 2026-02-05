import React from 'react'


import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Prizes from '../components/Prizes'
import Tracks from '../components/Tracks'
import Timelines from '../components/TimeLines'
import Rules from '../components/Rules'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'
import Team from "../components/Team"






const Landing = () => {
  return (
    <div
     className='h-100% bg-gray-950 font-hacker tracking-widest'>
      <Navbar/>
      <Hero/>
      <About/>
      <Tracks/>
      <Prizes/>
       <Team/>
      <Timelines/>
      <Rules/>
      <FAQs/>
      <Footer/>
     
    </div>
  )
}

export default Landing
