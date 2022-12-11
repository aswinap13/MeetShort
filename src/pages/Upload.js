import React, { useState } from 'react';
import './css/upload.css'


function Upload(props) {
  const setVisible=props.setVisible;
    const visible=props.visible;

  return (
      <div className='upload'>
        <p>Upload Your File</p>
        <img src={require('../assets/removed.png')} alt='bg' />
        <input type="file" value="" />
      </div>
  )
}

export default Upload