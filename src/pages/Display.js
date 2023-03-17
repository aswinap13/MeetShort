import React from 'react'
import './css/display.css'

function Display(props) {
  const summary=props.summary;
  return (
    
    <div className='display' id='displaySummary'>
        <h3>Transcript</h3>
        {/* SUMMARY CHOSE BUTTONS */}
            <button className='summary-button active'>Extractive Summary</button>
            <button className='summary-button '>Abstractive Summary</button>

        <div className='summary-toggle'>
          <div className='asr'>
            {/* based on selection display summary */}
                <p>{summary}</p>
          </div>
        </div>
    </div>
  )
}

export default Display