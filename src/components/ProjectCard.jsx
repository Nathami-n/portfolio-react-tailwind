import React from 'react'

const ProjectCard = ({data}) => {
  return (
    <div className=' h-auto mt-6 relative group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] shadow-xl mb-6 shadow-gray-400 md: mr-6'>
  <a href= {data.link}>
    <img 
    src={data.source}
    
    alt="project image"
    className='cursor-pointer transition-all 5s ease-in-out rounded-xl group-hover:opacity-10'
    />
    </a>
    </div>
  )
}

export default ProjectCard