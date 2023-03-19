import React, { useState } from 'react'
import './css/display.css'

function Display(props) {
  const summary=props.summary;
  const [activebtn, setActivebtn] = useState('transcript')

  return (
    
    <div className='display' id='displaySummary'>
        <h3>Result</h3>
        {/* SUMMARY CHOSE BUTTONS */}
            <button className={ activebtn === 'transcript' ? 'summary-button active' : 'summary-button' } name='transcript' onClick={(e) => setActivebtn(e.target.name)}>Transcript</button>
            <button className={ activebtn === 'esummary' ? 'summary-button active' : 'summary-button' } name='esummary' onClick={(e) => setActivebtn(e.target.name)}>Extractive Summary</button>
            <button className={ activebtn === 'asummary' ? 'summary-button active' : 'summary-button' } name='asummary' onClick={(e) => setActivebtn(e.target.name)}>Abstractive Summary</button>

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