import React from 'react'
import MenuBar from './MenuBar'
import './stylesheets/Home.css'

function Home() {
  return (
    <React.Fragment>
      <MenuBar />
      <div id='homeContiner'>
        <p>Hello from Home.js</p>
      </div>
    </React.Fragment >
  )

}

export default Home