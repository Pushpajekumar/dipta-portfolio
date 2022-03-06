import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import About from './Components/About'
import Achievements from './Components/Achievements'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Work from './Components/Work'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/work' element={<Work />} />
      </Routes>
      <About />
      <Achievements />
      <Services />
      <Contact />
    </>
  )
}

export default App