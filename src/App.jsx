import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LeftLine from './components/LeftLine';

function App() {

  return (
   <>
   <Navbar />
   <div className='grid-cols-1 w-full'>
    <LeftLine/>
   <Home />
  </div>
   </>
  )
}

export default App
