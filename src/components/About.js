import React from 'react'
import MenuBar from './MenuBar'
import './stylesheets/About.css'

function About() {
  return (
    <React.Fragment>
      <MenuBar />
      <div id='aboutContiner'>
        <p>Hello from About.js</p>
      </div>
    </React.Fragment >
  )

}

export default About