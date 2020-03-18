import React from 'react';
import './stylesheets/ArticleSmall.css'
import { Link } from 'react-router-dom'

//Icons
import bash from '../static/Bash.svg'
import cSharp from '../static/CSharp.svg'
import rust from '../static/Rust.svg'
import env from '../static/Env.svg'
import kata from '../static/Kata.svg'
import javascript from '../static/JavaScript.svg'
import python from '../static/Python.svg'



function ArticleSmall(
  { setSingleArticle, articleToSingle, setCategory,
    articles, title, category, date, short }) {

  // For some mysterious reason this does not work in place of the onClick we have now.
  // Although it should be the same.
  // const handleClick = (category) => {
  //   setCategory(articles.filter(article => article.category === category))
  // }

  const currentPath = window.location.pathname
  return (
    <React.Fragment>

      <article id='articleSmall'>
        {/* There must be a better way... */}
        <Link to={`/blog/category/${category}`}>

          {category === 'JavaScript' &&
            <img
              class='smallIcon'
              alt='JavaScript Icon'
              src={javascript}
              onClick={() => {
                !currentPath.includes('category') &&
                  setCategory(articles.filter(article => article.category === category))
              }}
            />
          }

          {category === 'Python' &&
            <img
              class='smallIcon'
              alt='Python Icon'
              src={python}
              onClick={() => {
                !currentPath.includes('category') &&
                  setCategory(articles.filter(article => article.category === category))
              }}
            />
          }

          {category === 'env' &&
            <img
              class='smallIcon'
              alt='Gears Icon'
              src={env}
              onClick={() => {
                !currentPath.includes('category') &&
                  setCategory(articles.filter(article => article.category === category))
              }}
            />
          }

          {category === 'Katas' &&
            <img
              class='smallIcon'
              alt='Puzzle Icon'
              src={kata}
              onClick={() => {
                !currentPath.includes('category') &&
                  setCategory(articles.filter(article => article.category === category))
              }}
            />
          }

        </Link>

        <div id="titleDate">
          <Link to={`/blog/${title}`}>
            <h1 onClick={() => setSingleArticle([articleToSingle])}>
              {title}</h1>
          </Link>

          <p className='specialPositionSmall'>
            <small><i><span className='color'>Posted: </span>
              {date}</i></small></p>
        </div>

        <p id='articleShort'>{short}</p>
      </article>
    </React.Fragment >
  );
}

export default ArticleSmall;