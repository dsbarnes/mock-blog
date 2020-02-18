import React from 'react'
import './stylesheets/About.css'
import text from '../articles/about'
import MenuBar from './MenuBar'
import BottomSection from './BottomSection'

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
      <BottomSection />
    </React.Fragment >
  )

}

export default About