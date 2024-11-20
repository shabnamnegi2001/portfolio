import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
   
  <div className='grid grid-flow-col grid-cols-[20%_80%] h-full bg-blue-500 '>

   <div className='w-full bg-pink-500 h-full'>
   </div>
   {/* <Navbar /> */}
   
   <div className=' bg-green-500 w-screen '>
   <Home />
  </div>

  </div>

  )
}

export default App

