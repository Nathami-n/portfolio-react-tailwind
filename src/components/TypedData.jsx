import React, { useEffect, useRef } from 'react'
import { GrLinkedin, GrTwitter, GrGithub} from 'react-icons/gr'



const TypedData = () => {


  return (
    <div className='w-100 h-screen flex flex-col justify-center text-center'>
      <h1 className='text-3xl text-[#181111] font-bold '>Meet Nathan George</h1>
      <h1 className='text-3xl text-[#141111] font-bold'>Web Developer and Coder</h1>
      <span className='flex justify-center gap-5 mt-4 text-[#021841fa]'>
        <a href=""><GrLinkedin size={30}/></a>
        <a href=""> <GrTwitter size={30} /> </a>
        <a href=""> <GrGithub size={30}/> </a>
      </span>
    </div>
  )
}

export default TypedData