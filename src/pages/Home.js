
import React, {useState } from 'react';
import '../App.css'
import HomePage from './HomePage'
import About from './About'
import How from './How'


import './css/home.css'
import Display from './Display'



function Home() {
  const [transcript, setTranscript] = useState();
  const [esummary, setEsummary] = useState({});

  return (
    <div className='App'>
    <HomePage setEsummary={setEsummary} setTranscript={setTranscript}/>
    <div className='secnd'>
      <About/>
      <How/>
    </div>
    <Display esummary={esummary} transcript={transcript}/>
  </div>
  )
}

export default Home