import React, { useState } from 'react';
import './css/upload.css'


function Upload(props) {
  const setVisible=props.setVisible;
    const visible=props.visible;

  return (
      <div className='upload'>
        <p>Upload Your File</p>
        <img src={require('../assets/removed.png')} alt='bg' />
        <input className='input' type="file" value="" />
        <input className='upbtn' type="button" value='Submit'/>
        <button onClick={() => setVisible(!visible)} className='close'>Close</button>
      </div>
  )
}

export default Upload