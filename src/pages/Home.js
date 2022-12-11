import React, { useState } from 'react'
import '../App.css'
import HomePage from './HomePage'
import About from './About'
import How from './How'

import './css/home.css'
import Display from './Display'



function Home() {
  const [summary, setSummary] = useState();


  return (
    <div className='App'>
    <HomePage setSummary={setSummary}/>
    <div className='secnd'>
      <About/>
      <How/>
    </div>
    <Display summary={summary}/>
  </div>
  )
}

export default Home