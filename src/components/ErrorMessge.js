import React from 'react'
import './stylesheets/ErrorMessage.css'
import MenuBar from './MenuBar'

function ErrorMessage() {
  return (
    <React.Fragment>
      <MenuBar />
      <div id='errorMessage'>
        <h2>Oh no! Something has gone wrong.</h2>
        <br />
        <p>Please navigate back to the blog and try again.</p>
      </div>
    </React.Fragment >
  )

}

export default ErrorMessage