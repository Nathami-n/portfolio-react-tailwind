import React, {useState} from 'react'
import Logo from './components/Logo'
import Sidenav from './components/Sidenav'
import Body from './components/Body'
import About from './components/About'

const App = () => {
  return (
    <div>
      {/* <Logo/> */}
      <Sidenav/>
      <Body/>
      <About/>
    </div>
  )
}

export default App