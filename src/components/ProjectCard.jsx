import React from 'react'

const ProjectCard = ({data}) => {
  return (
    <div className='w-[20rem] h-[20rem]'>
    <img 
    src={data.source}
    alt="project image"
    />
    </div>
  )
}

export default ProjectCard