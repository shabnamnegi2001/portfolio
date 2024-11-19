import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
   <>
   <Navbar />
   <Home />
   <h1 className="text-3xl underline">
      Hello world!
    </h1>
   </>
  )
}

export default App
