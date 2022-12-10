import React from 'react'
import './css/upload.css'


function Upload() {
  return (
      <div className='upload'>
        <p>Upload File</p>
        <img src={require('../assets/removed.png')} alt='bg' />
        <input type="file" value="" />
      </div>
  )
}

export default Upload