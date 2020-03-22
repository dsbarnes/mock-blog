import React from 'react';
import './stylesheets/MenuBar.css'
import { Link } from 'react-router-dom'

function MenuBar({ setSingleArticle }) {
  return (
    <nav id='container'>

      <h1 id='name'>
        <Link to='/mock-blog'>
          <span className='color'>D.S.</span> Barnes
        </Link>
      </h1>

      <div id="navLinks">
        <Link to='/blog'>
          <p
            className='navItem'
            onClick={
              //Didn't want to drill props,
              //So when the function isn't passed,
              //then don't use it, return.
              setSingleArticle ?
                () => setSingleArticle([]) :
                () => { return }
            }
          >Blog</p>
        </Link>
        <Link to='/about'><p className='navItem'>About</p></Link>
      </div>

    </nav >
  );
}

export default MenuBar;
