import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LeftLine from './components/LeftLine';
import Darkreader from 'react-darkreader'

function App() {

  return (
   
  <div className='grid grid-flow-col w-full grid-cols-[15%_85%] h-screen '>
   
    <div className='header-mist mist' >
      <div className='w-screen'></div>
    </div>
   <div className='w-full w-full'>
    <LeftLine />
   </div>
   {/* <Navbar /> */}
   <div className='w-full h-screen overflow-auto relative'>
    <div className='back-line'></div>
   <Home />
  </div>
  <div className='footer-mist mist' >
    <div className='w-screen'></div>
  </div>
 
  </div>

  )
}

export default App

