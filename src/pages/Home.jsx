import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='w-full '>
      <Intro />
      <About />
      {/* <Skills /> */}
    </div>
  )
}
