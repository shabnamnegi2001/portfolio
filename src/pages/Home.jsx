import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className='w-full grid grid-flow-row h-screen relative px-3 overflow-x-hidden'
    style={{
      scrollSnapType : "y mandatory"
    }}
    >
      <Intro  />
      <About/>
      <Skills/>
      <Projects />
    </div>
  )
}
