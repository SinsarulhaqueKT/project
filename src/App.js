import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Contacts from './components/Contacts'
import OurService from './components/OurService'
import Growwithus from './components/Growwithus'
import Careers from './components/Careers'
import './style.css'
import Home from './components/Home'
import AboutUS from './components/AboutUS'






const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>

          <Route path='contactus' element={<Contacts/>}/>
          <Route path='Ourservice' element={<OurService/>}/>
          <Route path ='growwithus' element={<Growwithus/>}/>
          <Route path='careers' element={<Careers/>}/> 
          <Route path='/AboutUs' element={<AboutUS/>} />


        </Route>
      </Routes>
     
      </BrowserRouter>

      
      
      
    </div>
  )
}

export default App
