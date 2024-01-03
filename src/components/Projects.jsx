import React from 'react'
import {data} from '../Data.js'
import ProjectCard from './ProjectCard.jsx'

const Projects = () => {
  console.log(data)
  return (
    <div>
        <h1 className='text-4xl text-center font-semibold text-[#0f285ef1] mb-6'>Projects</h1>
        <div className='grid md:flex row justify-evenly'>
          {data.map((item)=> {
            return <ProjectCard data ={item} key={item.id}/>
          })}
        </div>
    </div>
  )
}

export default Projects