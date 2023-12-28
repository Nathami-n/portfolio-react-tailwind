import React from 'react';
import porfolio from '../assets/portfolio.jpg'
const Body = () => {
  return (
    <div className='relative'>
      <img src= {porfolio} className='scale-x-[-1] h-screen w-screen object-cover object-left relative ' />
      <div className='h-screen w-screen bg-slate-300/50 absolute top-0'>
      </div>
  
    </div>
  )
}

export default Body