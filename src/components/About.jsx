import React from 'react'

const About = () => {

  return (
    <div id='about' className='mt-4 h-full w-full'>
      <h1 className='text-4xl text-center font-semibold text-[#0f285ef1] mb-6'>About</h1>
      <section className='border-l-4 border-gray-400 md:ml-12 text-lg'>
        <section className=' mb-5 flex row md:flex row justify-evenly '>
          <h3 className='bg-[#0f285ef1] border-1 rounded w-13 h-9 pt-1 text-white p-2'>2023</h3>
          <h3 className='bg-[#0f285ef1] border-1 rounded w-13 h-9 pt-1 text-white p-2'>Frontend developer</h3>
          <h3 className='text-gray-500'>-years</h3>
        </section>
        <div >
          <p className='mb-4 ml-0 md:ml-6 wrap'>
         I have worked with a group called AdventBand where we are currently working on a full-stack web application mainly based on development of healthy habits of diet. I have experience in agile methodology of doing tasks as an afterm
          </p>
        </div>
      </section>
      </div>
  )
}

export default About