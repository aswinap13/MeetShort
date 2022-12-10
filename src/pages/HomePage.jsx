import React from 'react'
import './css/homepage.css'
import NavigationBar from './NavigationBar'
function HomePage() {
  return (
    <div className='homepage'>
      <NavigationBar/>
        <div className="meetshort">
            <h1>Lorem Ipsum</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <button className='btn'>Get Started<i class='fas fa-angle-double-right'></i>

            </button>
        </div>
    </div>
  )
}

export default HomePage