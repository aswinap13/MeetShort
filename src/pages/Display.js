import React from 'react'
import './css/display.css'

function Display(props) {
  const summary=props.summary;
  return (
    <div className='display' id='displaySummary'>
        <h3>Transcript</h3>
        <div className='asr'>
            <div>
                <p className='transcript'>{summary}</p>
            </div>
        </div>
    </div>
  )
}

export default Display