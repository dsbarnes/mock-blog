import React from 'react';
import articles from '../articles/articles' //Because I need ALL the articles, not just the one
import './stylesheets/ArticleSmall.css'
import { Link } from 'react-router-dom'

function ArticleSmall(
  { setSingleArticle, articleToSingle, setCategory,
    image, title, category, date, short }) {
  return (
    <React.Fragment>

      <article id='articleSmall'>
        <Link to={`/blog/category/${category}`}>
          <img id='articleSmallImg'
            alt="todo"
            onClick={() => setCategory(
              articles.filter(article => article.category === category)
            )}
            src={image}>
          </img>
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