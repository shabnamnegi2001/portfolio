import React from 'react'
import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div className='w-full grid grid-flow-row'>
      <Intro className={'h-screen'}/>
      <About className={'h-screen'}/>
      {/* <Skills /> */}
    </div>
  )
}
