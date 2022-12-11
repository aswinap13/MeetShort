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
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <button className='btn' onClick={() => setVisible(!visible)}>Get Started<i class='fas fa-angle-double-right'></i></button>
        </div>
        {!visible && <Upload setVisible={setVisible} visible={visible} setSummary={setSummary}/>}
        
    </div>
  )
}

export default HomePage