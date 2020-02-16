import React from 'react'
import MenuBar from './MenuBar'
import './stylesheets/Category.css'

function Category() {
  return (
    <React.Fragment>
      <MenuBar />
      <div id='categoryContainer'>
        <p>Hello from the category page</p>
      </div>
    </React.Fragment >
  )

}

export default Category