import React from 'react';
import './stylesheets/ArticleSmall.css'
import { Link } from 'react-router-dom'

function ArticleSmall(
  { setSingleArticle, articleToSingle, setCategory,
    articles, title, category, date, short }) {
  return (
    <React.Fragment>

      <article id='articleSmall'>
        {/* There must be a better way... */}
        <Link to={`/blog/category/${category}`}>

          {category === 'JavaScript' && <i
            onClick={() => setCategory(articles.filter(article => article.category === category))}
            className="fab fa-js-square fa-3x"></i>}

          {category === 'Python' && <i
            onClick={() => setCategory(articles.filter(article => article.category === category))}
            className="fab fa-python fa-3x"></i>}

          {category === 'env' && <i
            onClick={() => setCategory(articles.filter(article => article.category === category))}
            className="far fa-folder-open fa-3x"></i>}

          {category === 'Katas' && <i
            onClick={() => setCategory(articles.filter(article => article.category === category))}
            className="fas fa-puzzle-piece fa-3x"></i>}

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