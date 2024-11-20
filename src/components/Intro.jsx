import React from 'react';
import PageIcon from './PageIcon';

export default function Intro() {
  return (
    <div class="flex w-full h-screen bg-orange-400">
    <div class="flex-none w-1/2 h-1/2 relative p-2.5 items-center justify-center m-auto  ">
      <div className='absolute left-2 leading-3 tracking-normal'>
        <span className='text-2xl'>Hi, there</span>
        <h2 className='text-6xl'>Shabnam Negi</h2>
        <p className='text-3xl'>I'm a Learner</p>
        <span className='flex gap-4 leading-6 ml-4 w-'>
          <a className='' title='LinkedIn Profile' target='blank' href=''></a>
          <button>hi</button>
          <button>hi</button>
          <button>hi</button> 
        </span>
      </div>
        
    </div>
    <div>
      <PageIcon />
    </div>
  </div>
  )
}


