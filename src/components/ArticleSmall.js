import React from 'react';
import './stylesheets/ArticleSmall.css'
import { Link } from 'react-router-dom'

function ArticleSmall(
  { setSingleArticle, articleToSingle, image, title, category, date, short }) {
  return (
    <React.Fragment>

      <article
        id='articleSmall'
        onClick={() => setSingleArticle([articleToSingle])}
      >
        <Link to={`/blog/category/${category}`}>
          <img id='articleSmallImg'
            alt="todo"
            style={{
              height: 35 + 'px',
              width: 35 + 'px'
            }}
            src={image}>
          </img>
        </Link>

        <div id="titleDate">
          <Link to={`/blog/${title}`}>
            <h1>{title}</h1>
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