import React from 'react'
import MenuBar from './MenuBar'
import text from '../articles/about'
import './stylesheets/About.css'

function About() {
  return (
    <React.Fragment>
      <MenuBar />
      <div id='aboutContiner'>
        <p>{text.sectionOne}</p>
        <p>{text.sectionTwo}</p>
        <p>{text.sectionThree}</p>
        <p>{text.sectionFour}</p>
      </div>
    </React.Fragment >
  )

}

export default About