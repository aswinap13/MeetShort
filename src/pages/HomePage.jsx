import React, { useState } from 'react';
import NavigationBar from './NavigationBar'
import Upload from './Upload';
import './css/homepage.css'


function HomePage(props) {
  const setSummary = props.setSummary;

  const [visible, setVisible] = useState(true);
  return (
    <div className='homepage'>
      <NavigationBar/>
        <div className="meetshort">
            <h1>Meeting Summarizer</h1>
            <p>Summarize and minute your business in one click.Summarize and minute your business in one click.Summarize and minute your business in one click. </p>
            <button className='btn' onClick={() => setVisible(!visible)}>Get Started<i class='fas fa-angle-double-right'></i></button>
        </div>
        {!visible && <Upload setVisible={setVisible} visible={visible} setSummary={setSummary}/>}
        
    </div>
  )
}

export default HomePage