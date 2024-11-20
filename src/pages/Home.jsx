import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'
import HatBackground from '../components/HatBackground'

export default function Home() {
  return (
    <div className='w-full grid grid-flow-row h-screen relative px-3 '>
      <Intro  />
      <About/>
      <Skills/>
    </div>
  )
}
