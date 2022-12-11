import React from 'react'
import '../App.css'
import HomePage from './HomePage'
import About from './About'
import How from './How'

import './css/home.css'
import Display from './Display'



function Home() {
  return (
    <div className='App'>

    
    <HomePage/>
    <div className='secnd'>
      <About/>
      <How/>
    </div>
    <Display/>
  </div>
  )
}

export default Home