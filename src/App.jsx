import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LeftLine from './components/LeftLine';

function App() {

  return (
   
  <div className='grid grid-flow-col grid-cols-2 h-full w-full '>

   <div className='w-full h-full'>
    leftsidebar
   </div>
   <div className='w-full h-full'>
   <Navbar />
   <div className='grid-cols-1 w-full'>
    <LeftLine/>
   <Home />
  </div>
  </div>
  </div>

  )
}

export default App

