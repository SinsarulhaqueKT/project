import React from 'react'
import Img from './Img'
import LogisticProvider from './LogisticProvider'
import OurSeviceBar from './OurSeviceBar'
import UniqueBar from './UniqueBar'
import News from './News'
import Testimonials from './Testimonials'
import Footer from './Footer'
import LaFooter from './LaFooter'



const Home = () => {
  return (
    <div>
              <Img/>
      <LogisticProvider/>
      <OurSeviceBar/>
      <UniqueBar/>
      <News/>
      <Testimonials/>
      <Footer/>
      <LaFooter/>
      
      
      
    </div>
  )
}

export default Home
