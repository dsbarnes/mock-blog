import React from 'react';
import './stylesheets/MenuBar.css'
import { Link } from 'react-router-dom'

function MenuBar() {
  return (
    <nav id='container'>

      <h1 id='name'>
        <Link to='/'>
          <span className='color'>D.S.</span> Barnes
        </Link>
      </h1>

      <div id="navLinks">
        <Link to='/blog'><p className='navItem'>Blog</p></Link>
        <Link to='/about'><p className='navItem'>About</p></Link>
      </div>

    </nav>
  );
}

export default MenuBar;
