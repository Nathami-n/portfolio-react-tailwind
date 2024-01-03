import React, {useState} from 'react'
import Sidenav from './components/Sidenav'
import Body from './components/Body'
import About from './components/About'
import Projects from './components/Projects'




const App = () => {
  return (
    <div>
      <Sidenav/>
      <Body/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App