import React from 'react';
import porfolio from '../assets/portfolio.jpg'
import Typed from './TypedData'
const Body = () => {
  return (
    <div className='relative'>
      <img src= {porfolio} className='scale-x-[-1] h-screen w-screen object-cover object-left relative' />
      
      <div className='h-screen w-screen bg-slate-300/50 absolute top-0'>
      <Typed/>
      </div>
    </div>
    
  )
}

export default Body